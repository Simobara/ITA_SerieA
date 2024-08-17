//QUESTO FILE E' CORRETTO

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.NODE_ENV === 'production' ? 3000 : 5000;


// Log per verificare che le variabili d'ambiente siano correttamente lette
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("USERNAME:", process.env.USERNAME);
console.log("PASSWORD:", process.env.PASSWORD ? "*****" : "Mancante"); // Non loggare direttamente la password
console.log("CLUSTER_URL:", process.env.CLUSTER_URL);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("VITE_API_URL_PRODUCTION:", process.env.VITE_API_URL_PRODUCTION);
console.log("VITE_API_URL_DEVELOPMENT:", process.env.VITE_API_URL_DEVELOPMENT);




// Middleware CORS
const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? 'https://ita-serie-a.vercel.app' // In produzione, permetti richieste solo dal tuo dominio Vercel
    : 'http://localhost:3000', // In sviluppo, permetti richieste dal localhost
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

app.use(cors(corsOptions));



// Questo è un commento per forzare un nuovo deploy
app.use(express.json());

// Stringhe di connessione env
const username   = process.env.USERNAME     || 'yourUsername';
const password   = process.env.PASSWORD     || 'yourPassword';
const clusterUrl = process.env.CLUSTER_URL  || 'yourClusterUrl';
const dbName     = process.env.DB_NAME      || 'yourDbName';
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
app.get('/api/test', (req, res) => {
  res.status(200).send('Test endpoint is working!');
});


// Conferma che il server è in esecuzione
app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
