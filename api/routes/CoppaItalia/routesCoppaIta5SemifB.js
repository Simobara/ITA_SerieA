// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaSemifinaleB/semifinaleB
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const { CoppaItaSemifinaleB } = require("../../schemas/schemaCoppaIta5Semif");

// Endpoint per prendere i dati della semifinale B
router.get("/coppaItaSemifinaleB/semifinaleB", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const semifinaleB = await CoppaItaSemifinaleB.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("SemifinaleB ", semifinaleB);
    res.send(semifinaleB);
  } catch (error) {
    console.error("Errore durante il recupero della semifinaleB:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post("/coppaItaSemifinaleB/semifinaleB", async (req, res) => {
  try {
    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const semifinaleB = await CoppaItaSemifinaleB.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log("Partita aggiornata:", semifinaleB);
    res.send(semifinaleB);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della partita:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
