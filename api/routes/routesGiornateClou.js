const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schemaGiornataClouN = require("../schemas/schemaGiornataClouN"); // Importa il modello

// Definisci il modello GiornataN utilizzando la connessione corrente di Mongoose
const GiornataClouN = mongoose.model("GiornataN", schemaGiornataClouN);

// Endpoint per ottenere tutte le giornate clou
router.get("/N", async (req, res) => {
  try {
    console.log("giornateClou.js => Richiesta GET ricevuta a /api/giornate/clou");
    const giornateClouN = await GiornataClouN.find({ giornataClouN: true });
    console.log("Giornate clou trovate:", giornateClouN);
    res.send(giornateClouN);
  } catch (error) {
    console.error("Errore durante il recupero delle giornate clou:", error);
    res.status(500).send(error);
  }
});

// Endpoint per impostare una giornata clou
router.post("/N", async (req, res) => {
  try {
    console.log("giornateClou.js => Richiesta POST ricevuta a /api/giornate/clou con numero:", req.body.numero);
    const { numero } = req.body;
    // li prende dal schemaGiornataClouN
    const giornataClouSelected = await GiornataClouN.findOneAndUpdate({ numeroSelezionato: numero }, { giornataCloN: true }, { new: true, upsert: true });
    console.log("Giornata clou selected e aggiornata:", giornataClouSelected);
    res.send(giornataClouSelected);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della giornata clou:", error);
    res.status(500).send(error);
  }
});

module.exports = router;