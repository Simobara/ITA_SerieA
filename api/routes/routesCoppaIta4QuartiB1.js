// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaQuartiB1/quartiB1
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const { CoppaItaQuartiB1 } = require("../schemas/schemaCoppaIta4Quarti");

// Endpoint per prendere i dati dei quarti B1
router.get("/coppaItaQuartiB1/quartiB1", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const quartiB1 = await CoppaItaQuartiB1.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("QuartiB1 ", quartiB1);
    res.send(quartiB1);
  } catch (error) {
    console.error("Errore durante il recupero dei Quarti B1:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post("/coppaItaQuartiB1/quartiB1", async (req, res) => {
  try {
    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const quartiB1 = await CoppaItaQuartiB1.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log("Partita aggiornata:", quartiB1);
    res.send(quartiB1);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della partita:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
