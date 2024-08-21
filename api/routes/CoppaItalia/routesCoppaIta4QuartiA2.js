// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaQuartiA2/quartiA2
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const { CoppaItaQuartiA2 } = require("../../schemas/schemaCoppaIta4Quarti");

// Endpoint per prendere i dati dei quarti A2
router.get("/coppaItaQuartiA2/quartiA2", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const quartiA2 = await CoppaItaQuartiA2.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("QuartiA2 ", quartiA2);
    res.send(quartiA2);
  } catch (error) {
    console.error("Errore durante il recupero dei Quarti A2:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post("/coppaItaQuartiA2/quartiA2", async (req, res) => {
  try {
    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const quartiA2 = await CoppaItaQuartiA2.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log("Partita aggiornata:", quartiA2);
    res.send(quartiA2);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della partita:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
