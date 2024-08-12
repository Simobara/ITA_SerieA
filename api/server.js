//QUESTO FILE E' CORRETTO

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware CORS
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? 'https://ita-serie-a.vercel.app'  // Origine consentita in produzione
    : 'http://localhost:5173',           // Origine consentita in sviluppo
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));



// Questo è un commento per forzare un nuovo deploy
app.use(express.json());

// Stringhe di connessione env
const username   = process.env.USERNAME || 'yourUsername';
const password   = process.env.PASSWORD || 'yourPassword';
const clusterUrl = process.env.CLUSTER_URL || 'yourClusterUrl';
const dbName     = process.env.DB_NAME || 'yourDbName';
const dbURI      = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=10000`;

// Connessione a MongoDB Atlas
mongoose.connect(dbURI)
.then(() => console.log("Connected to MongoDB Atlas"))
.catch((err) => console.error("Could not connect to MongoDB Atlas...", err));


//----------------------------------------------------------------ENDPOINTS
// Importa e usa il router per gli endpoint
const routerGiornateClou = require('./routes/routesGiornateClou');
app.use('/api/giornate',routerGiornateClou);

// Importa e usa il router per `CoppaItaliaFinale`
const routerCIFinale = require('./routes/routesCoppaItaFinale');
app.use('/api/coppaItaFinale', routerCIFinale);

// Importa e usa il router per `Giornata`
const routerGiornata = require('./routes/routesGiornata');
app.use('/api/giornate', routerGiornata);

// Importa e usa il router per `Giornata1`
// const routerGiornata1 = require('./routes/routesGiornata1');
// app.use('/api/giornate', routerGiornata1);
//----------------------------------------------------------------



// Conferma che il server è in esecuzione
app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
