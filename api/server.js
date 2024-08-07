require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
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

// Importa e usa il router per gli endpoint
const routerGiornateClou = require('./routes/routesGiornateClou');
app.use('/api/giornate',routerGiornateClou);

// Importa e usa il router per `CoppaItaliaFinale`
const routerCIFinale = require('./routes/routesCoppaItaFinale');
app.use('/api/coppaItaFinale', routerCIFinale);

// Conferma che il server è in esecuzione
app.listen(PORT, () => {
  console.log(`Server.js => Server running on port ${PORT}`);
});
