// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaFinale/finale
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const schemaCoppaItaFinale = require("../../schemas/schemaCoppaIta6Finale");
const CoppaItaFinale = mongoose.model("CoppaItaFinale", schemaCoppaItaFinale);

// Endpoint per prendere il nome della squadra
router.get("/coppaItaFinale/finale", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const finale = await CoppaItaFinale.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log("Finale ", finale);
    res.send(finale);
  } catch (error) {
    console.error("Errore durante il recupero della finale:", error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post("/coppaItaFinale/finale", async (req, res) => {
  try {
    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const finale = await CoppaItaFinale.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log("Partita aggiornata:", finale);
    res.send(finale);
  } catch (error) {
    console.error("Errore durante l'aggiornamento della partita:", error);
    res.status(500).send(error);
  }
});

module.exports = router;
