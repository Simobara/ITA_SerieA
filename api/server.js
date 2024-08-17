//QUESTO FILE E' CORR. server.js

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

// Questo è un commento per forzare un nuovo deploy
app.use(express.json());

// Funzione per la connessione a MongoDB
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
  
  cachedDb = await mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB Atlas");
  return cachedDb;
}

//----------------------------------------------------------------ENDPOINTS
// Importa e usa il router per gli endpoint
const routerGiornateClou = require('./routes/routesGiornateClou');
app.use('/api/giornate', async (req, res, next) => {
  await connectToDatabase();
  routerGiornateClou(req, res, next);
});

// Importa e usa il router per `CoppaItaliaFinale`
const routerCIFinale = require('./routes/routesCoppaItaFinale');
app.use('/api/coppaItaFinale', async (req, res, next) => {
  await connectToDatabase();
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
