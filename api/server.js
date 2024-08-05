require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Importa il modello Giornata
const Giornata = require("./schemas/giornataSchema");

// Costruisci il connection string dinamicamente
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const clusterUrl = process.env.CLUSTER_URL;
const dbName = process.env.DB_NAME;
const dbURI = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

// Connessione a MongoDB Atlas
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => console.error("Could not connect to MongoDB Atlas...", err));

// Endpoint per ottenere tutte le giornate
app.get("/api/giornate", async (req, res) => {
  try {
    const giornate = await Giornata.find();
    res.send(giornate);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare la giornataClou
app.put("/api/giornate/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { giornataClou } = req.body;
    const giornata = await Giornata.findByIdAndUpdate(id, { giornataClou }, { new: true });
    res.send(giornata);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint per impostare una giornata clou
app.post("/api/giornate/clou", async (req, res) => {
  try {
    const { numero } = req.body;
    const giornata = await Giornata.findOneAndUpdate({ numeroSelezionato: numero }, { giornataClou: true }, { new: true, upsert: true });
    res.send(giornata);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
