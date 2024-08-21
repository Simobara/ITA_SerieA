require('dotenv').config({ path: '../.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http'); 
const https = require('https'); 
const app = express();
const PORT = process.env.PORT || 5000;

console.log("----------------------------------");
console.log("NODE_ENV:",    process.env.NODE_ENV);
console.log("USERNAME:",    process.env.USERNAME);
console.log("PASSWORD:",    process.env.PASSWORD ? "*****" : "Mancante");
console.log("CLUSTER_URL:", process.env.CLUSTER_URL);
console.log("DB_NAME:",     process.env.DB_NAME);
console.log("VITE_API_URL_PROD:", process.env.VITE_API_URL_PROD);
console.log("VITE_API_URL_DEV:",  process.env.VITE_API_URL_DEV);
console.log("----------------------------------");

// Middleware CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://ita-serie-a.vercel.app' 
    : 'http://localhost:3000', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());//forza nuovo deploy

let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }
  
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const clusterUrl = process.env.CLUSTER_URL;
  const dbName = process.env.DB_NAME;
  const dbURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=10000`;

  try {
    console.log("Trying to connect to MongoDB...");
    const connection = await mongoose.connect(dbURI, {
      serverSelectionTimeoutMS: 5000, // Timeout dopo 5 secondi
      socketTimeoutMS: 45000,         // Chiudi i socket dopo 45 secondi di inattività
      family: 4                       // Usa IPv4, ignora IPv6
    });

    cachedDb = connection;            // Memorizza la connessione nel cache
    console.log("Connected to MongoDB Atlas in dev/prod environment");

    return cachedDb;
  } catch (err) {
    console.error("Could not connect to MongoDB Atlas in production...", err);
    throw new Error('Database connection failed');
  }
}

const agent = new http.Agent({ keepAlive: true });//Configura gli agenti per mantenere aperte le connessioni
const secureAgent = new https.Agent({ keepAlive: true });

//--------------------------------------------------ENDPOINTS
const routerGiornateClou = require('./routes/routesGiornataClouN');
const routerGiornata =     require('./routes/routesGiornata');

const routerCIFinale =            require('./routes/CoppaItalia/routesCoppaIta6Finale');
const routerCoppaItaSemifinali =  require('./routes/CoppaItalia/routesCoppaIta5Semifinali');
const routerCoppaItaQuarti =      require('./routes/CoppaItalia/routesCoppaIta4Quarti'); 


const routerCoppaItaOttaviA1 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviA1'); 
// const routerCoppaItaOttaviA2 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviA2');
// const routerCoppaItaOttaviA3 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviA3');
// const routerCoppaItaOttaviA4 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviA4');
// const routerCoppaItaOttaviB1 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviB1');
// const routerCoppaItaOttaviB2 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviB2');
// const routerCoppaItaOttaviB3 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviB3');
// const routerCoppaItaOttaviB4 =    require('./routes/CoppaItalia/routesCoppaIta3OttaviB4');


//--------------------------------------------------CAMPIONATO //!CORRETTO
app.use('/api', async (req, res, next) => {
  await connectToDatabase();
  switch (true) {
    case req.path.startsWith('/giornate'):
         routerGiornateClou(req, res, next);
         break;
    case req.path.startsWith('/giornata'):
         routerGiornata(req, res, next);
         break;
    //-----------------------------------------------COPPAITALIA
    //-----------------------------------------------Finale
    case req.path.startsWith('/coppaItaFinale'):
         routerCIFinale(req, res, next);
         break;
    //-----------------------------------------------Semifinali
    case req.path.startsWith('/coppaItaSemifinaleA') ||
         req.path.startsWith('/coppaItaSemifinaleB'):
         routerCoppaItaSemifinali(req, res, next);
         break;
    //-----------------------------------------------Quarti
    case req.path.startsWith('/coppaItaQuartiA1') || 
         req.path.startsWith('/coppaItaQuartiA2') || 
         req.path.startsWith('/coppaItaQuartiB1') || 
         req.path.startsWith('/coppaItaQuartiB2'):
         routerCoppaItaQuarti(req, res, next);
         break;


    //-----------------------------------------------Ottavi
    case req.path.startsWith('/coppaItaOttaviA1'):
      routerCoppaItaOttaviA1(req, res, next);
      break;
    // case req.path.startsWith('/coppaItaOttaviA2'):
    //   routerCoppaItaOttaviA2(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviA3'):
    //   routerCoppaItaOttaviA3(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviA4'):
    //   routerCoppaItaOttaviA4(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviB1'):
    //   routerCoppaItaOttaviB1(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviB2'):
    //   routerCoppaItaOttaviB2(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviB3'):
    //   routerCoppaItaOttaviB3(req, res, next);
    //   break;
    // case req.path.startsWith('/coppaItaOttaviB4'):
    //   routerCoppaItaOttaviB4(req, res, next);
    //   break;
    //-----------------------------------------------Sedicesimi

    //-----------------------------------------------Trentaduesimi
    default:
      console.log('No matching route, passing to next middleware.');
      next();
  }
});

//----------------------------------------------------------------
app.get('/api/test', (req, res) => {
  res.status(200).send('Test endpoint is working!');
});

app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
