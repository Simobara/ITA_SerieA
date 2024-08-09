const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const giornataSchema = require("../schemas/giornataSchema"); // Importa lo schema

// Verifica se il modello è già stato definito, altrimenti definiscilo
const Giornata1 = mongoose.model("Giornata1", giornataSchema);

// Endpoint per ottenere tutte le giornate
router.get("/giornata1", async (req, res) => {
  try {
    console.log("giornata.js => Richiesta GET ricevuta a /api/giornata/giornata1");
    const giornata1 = await Giornata1.find();
    console.log("Giornate ", giornata1);
    res.send(giornata1);
  } catch (error) {
    console.error("Errore durante il recupero delle giornate:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiungere una nuova giornata
router.post("/giornata1", async (req, res) => {
  try {
    console.log("giornata.js => Richiesta POST ricevuta a /api/giornata/giornata1 con dati:", req.body);
    const nuovaGiornata = new Giornata1(req.body); // Usa il modello corretto
    await nuovaGiornata.save();
    console.log("Nuova giornata aggiunta:", nuovaGiornata);
    res.send(nuovaGiornata);
  } catch (error) {
    console.error("Errore durante l'aggiunta della nuova giornata:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
