require('dotenv').config({ path: '../.env' });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

console.log("----------------------------------");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("USERNAME:", process.env.USERNAME);
console.log("PASSWORD:", process.env.PASSWORD ? "*****" : "Mancante");
console.log("CLUSTER_URL:", process.env.CLUSTER_URL);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("VITE_API_URL_PRODUCTION:", process.env.VITE_API_URL_PRODUCTION);
console.log("VITE_API_URL_DEVELOPMENT:", process.env.VITE_API_URL_DEVELOPMENT);
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
    console.log("Using cached database instance");
    return cachedDb;
  }
  
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;
  const clusterUrl = process.env.CLUSTER_URL;
  const dbName = process.env.DB_NAME;
  const dbURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=10000`;

  try {
    const connection = await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout dopo 5 secondi
      socketTimeoutMS: 45000,         // Chiudi i socket dopo 45 secondi di inattività
      poolSize: 10,                   // Numero massimo di socket in pool
      family: 4                       // Usa IPv4, ignora IPv6
    });

    cachedDb = connection; // Memorizza la connessione nel cache
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
// Importa e usa il router per `GiornateClou`
const routerGiornateClou = require('./routes/routesGiornateClou');
app.use('/api/giornate', async (req, res, next) => {
  await connectToDatabase();
  routerGiornateClou(req, res, next);
});

// Importa e usa il router per `CoppaItaliaFinale`
const routerCIFinale = require('./routes/routesCoppaItaFinale');
app.use('/api/coppaItaFinale', async (req, res, next) => {
  console.log("Request received for /api/coppaItaFinale");
  await connectToDatabase();
  console.log("Connected to database, processing request...");
  routerCIFinale(req, res, next);
});

// Importa e usa il router per `Giornata`
const routerGiornata = require('./routes/routesGiornata');
app.use('/api/giornate', async (req, res, next) => {
  await connectToDatabase();
  routerGiornata(req, res, next);
});
//----------------------------------------------------------------

app.get('/api/test', (req, res) => {
  res.status(200).send('Test endpoint is working!');
});

// Conferma che il server è in esecuzione
app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
