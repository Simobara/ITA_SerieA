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
app.use(express.json());// Questo è un commento per forzare un nuovo deploy

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

// Configura gli agenti per mantenere aperte le connessioni
const agent = new http.Agent({ keepAlive: true });
const secureAgent = new https.Agent({ keepAlive: true });

//----------------------------------------------------------------ENDPOINTS
const routerCIFinale =            require('./routes/CoppaItalia/routesCoppaIta6Finale'); 
const routerCoppaItaSemifinaleA = require('./routes/CoppaItalia/routesCoppaIta5SemifA');
const routerCoppaItaSemifinaleB = require('./routes/CoppaItalia/routesCoppaIta5SemifB');
const routerCoppaItaQuartiA1 =    require('./routes/CoppaItalia/routesCoppaIta4QuartiA1'); 
const routerCoppaItaQuartiA2 =    require('./routes/CoppaItalia/routesCoppaIta4QuartiA2');
const routerCoppaItaQuartiB1 =    require('./routes/CoppaItalia/routesCoppaIta4QuartiB1'); 
const routerCoppaItaQuartiB2 =    require('./routes/CoppaItalia/routesCoppaIta4QuartiB2');

//-----------------------------------------------------CAMPIONATO
// Importa e usa il router per `routesGiornataClouN`               //!CORRETTO
const routerGiornateClou = require('./routes/routesGiornataClouN');
app.use('/api', async (req, res, next) => {
  await connectToDatabase();
  routerGiornateClou(req, res, next);
});
//Importa e usa il router per `routesGiornata`                     //!CORRETTO
const routerGiornata = require('./routes/routesGiornata');
app.use('/api', async (req, res, next) => {
  await connectToDatabase();
  routerGiornata(req, res, next);
});

//-----------------------------------------------------COPPAITALIA
app.use('/api', async (req, res, next) => {
  await connectToDatabase();
  switch (true) {
    case req.path.startsWith('/coppaItaFinale'):
      routerCIFinale(req, res, next);
    break;
    case req.path.startsWith('/coppaItaSemifinaleA'):
      routerCoppaItaSemifinaleA(req, res, next);
    break;
    case req.path.startsWith('/coppaItaSemifinaleB'):
      routerCoppaItaSemifinaleB(req, res, next);
    break;
    case req.path.startsWith('/coppaItaQuartiA1'):
      routerCoppaItaQuartiA1(req, res, next);
      break;
    case req.path.startsWith('/coppaItaQuartiA2'):
      routerCoppaItaQuartiA2(req, res, next);
      break;
    case req.path.startsWith('/coppaItaQuartiB1'):
      routerCoppaItaQuartiB1(req, res, next);
    break;
    case req.path.startsWith('/coppaItaQuartiB2'):
      routerCoppaItaQuartiB2(req, res, next);
    break;

    default:
      console.log('No matching route, passing to next middleware.');
      next();
  }
});


// Importa e usa il router per `routesCoppaItaOttaviA1`            //!CORRETTO
// const routerCoppaItaQuartiB2 = require('./routes/routesCoppaIta3OttaviA1');
// app.use('/api', async (req, res, next) => {
//   await connectToDatabase(); 
//   routerCoppaItaQuartiB2(req, res, next); 
// });



//----------------------------------------------------------------
app.get('/api/test', (req, res) => {
  res.status(200).send('Test endpoint is working!');
});

app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
