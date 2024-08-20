// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaSemifinaleA/semifinaleA
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const { CoppaItaSemifinaleA } = require("../schemas/schemaCoppaIta5Semif");

// Endpoint per prendere i dati della semifinale A
router.get("/coppaItaSemifinaleA/semifinaleA", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const semifinaleA = await CoppaItaSemifinaleA.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("SemifinaleA ", semifinaleA);
    res.send(semifinaleA);
  } catch (error) {
    console.error("Errore durante il recupero della semifinaleA:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post("/coppaItaSemifinaleA/semifinaleA", async (req, res) => {
  try {
    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const semifinaleA = await CoppaItaSemifinaleA.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log("Partita aggiornata:", semifinaleA);
    res.send(semifinaleA);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della partita:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
