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
const allowedOrigins = [
  'https://ita-serie-a.vercel.app',
  'http://localhost:3000',
  'http://another-allowed-origin.com'
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
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

const routerCoppaItaTrentaduesimi = require('./routes/CoppaItalia/routesCoppaIta1Trentaduesimi');
const routerCoppaItaSedicesimi =    require('./routes/CoppaItalia/routesCoppaIta2Sedicesimi');
const routerCoppaItaOttavi =        require('./routes/CoppaItalia/routesCoppaIta3Ottavi');
const routerCoppaItaQuarti =        require('./routes/CoppaItalia/routesCoppaIta4Quarti'); 
const routerCoppaItaSemifinali =    require('./routes/CoppaItalia/routesCoppaIta5Semifinali');
const routerCIFinale =              require('./routes/CoppaItalia/routesCoppaIta6Finale');

//--------------------------------------------------CAMPIONATO 
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
    //-----------------------------------------------Trentaduesimi
    case req.path.startsWith('/coppaItaTrentaduesimiA1') || 
         req.path.startsWith('/coppaItaTrentaduesimiA2') || 
         req.path.startsWith('/coppaItaTrentaduesimiA3') || 
         req.path.startsWith('/coppaItaTrentaduesimiA4') || 
         req.path.startsWith('/coppaItaTrentaduesimiA5') || 
         req.path.startsWith('/coppaItaTrentaduesimiA6') || 
         req.path.startsWith('/coppaItaTrentaduesimiA7') || 
         req.path.startsWith('/coppaItaTrentaduesimiA8') || 

         req.path.startsWith('/coppaItaTrentaduesimiB1') || 
         req.path.startsWith('/coppaItaTrentaduesimiB2') || 
         req.path.startsWith('/coppaItaTrentaduesimiB3') || 
         req.path.startsWith('/coppaItaTrentaduesimiB4') || 
         req.path.startsWith('/coppaItaTrentaduesimiB5') || 
         req.path.startsWith('/coppaItaTrentaduesimiB6') || 
         req.path.startsWith('/coppaItaTrentaduesimiB7') || 
         req.path.startsWith('/coppaItaTrentaduesimiB8'):
         routerCoppaItaTrentaduesimi(req, res, next);
         break;
    //-----------------------------------------------Sedicesimi
    case req.path.startsWith('/coppaItaSedicesimiA1') || 
         req.path.startsWith('/coppaItaSedicesimiA2') || 
         req.path.startsWith('/coppaItaSedicesimiA3') || 
         req.path.startsWith('/coppaItaSedicesimiA4') || 

         req.path.startsWith('/coppaItaSedicesimiB1') || 
         req.path.startsWith('/coppaItaSedicesimiB2') || 
         req.path.startsWith('/coppaItaSedicesimiB3') || 
         req.path.startsWith('/coppaItaSedicesimiB4'):
         routerCoppaItaSedicesimi(req, res, next);
         break;
    //-----------------------------------------------Ottavi
    case req.path.startsWith('/coppaItaOttaviA1') || 
         req.path.startsWith('/coppaItaOttaviA2') || 
         req.path.startsWith('/coppaItaOttaviA3') || 
         req.path.startsWith('/coppaItaOttaviA4') || 
         
         req.path.startsWith('/coppaItaOttaviB1') || 
         req.path.startsWith('/coppaItaOttaviB2') || 
         req.path.startsWith('/coppaItaOttaviB3') || 
         req.path.startsWith('/coppaItaOttaviB4'):
         routerCoppaItaOttavi(req, res, next);
         break;
    //-----------------------------------------------Quarti
    case req.path.startsWith('/coppaItaQuartiA1') || 
         req.path.startsWith('/coppaItaQuartiA2') || 
         req.path.startsWith('/coppaItaQuartiB1') || 
         req.path.startsWith('/coppaItaQuartiB2'):
         routerCoppaItaQuarti(req, res, next);
         break;
    //-----------------------------------------------Semifinali
    case req.path.startsWith('/coppaItaSemifinaleA') ||
         req.path.startsWith('/coppaItaSemifinaleB'):
         routerCoppaItaSemifinali(req, res, next);
         break;
    //-----------------------------------------------Finale
    case req.path.startsWith('/coppaItaFinale'):
         routerCIFinale(req, res, next);
         break;
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
