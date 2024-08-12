require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware CORS
const corsOptions = {
  origin: ['http://localhost:3000', 'https://ita-serie-a.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// Stringhe di connessione env
const username   = process.env.USERNAME;
const password   = process.env.PASSWORD;
const clusterUrl = process.env.CLUSTER_URL;
const dbName     = process.env.DB_NAME;
const dbURI      = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Connessione a MongoDB Atlas
mongoose
  .connect(dbURI)
  .then(() => console.log("Server.js => Connected to MongoDB Atlas"))
  .catch((err) => console.error("Server.js => Could not connect to MongoDB Atlas...", err));


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
