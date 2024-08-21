// COMPONENTE ROUTES COPPAITA SEMIFINALI
// ENDPOINT: http://localhost:5000/api/coppaItaSemifinaleA/semifinaleA
// ENDPOINT: http://localhost:5000/api/coppaItaSemifinaleB/semifinaleB
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const { CoppaItaSemifinaleA, CoppaItaSemifinaleB } = require("../../schemas/schemaCoppaIta");

// Funzione per determinare quale modello utilizzare in base all'URL
const getModel = (path) => {
  if (path.includes('semifinaleA')) return CoppaItaSemifinaleA;
  if (path.includes('semifinaleB')) return CoppaItaSemifinaleB;
  return null;
};

// Endpoint per prendere i dati delle semifinali
router.get(["/coppaItaSemifinaleA/semifinaleA", "/coppaItaSemifinaleB/semifinaleB"], async (req, res) => {
  try {
    const model = getModel(req.path);
    if (!model) {
      return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
    }

    const limit = parseInt(req.query.limit) || 10;
    const page = parseInt(req.query.page) || 1;
    const semifinali = await model.find()
      .limit(limit)
      .skip((page - 1) * limit);
    console.log(`Semifinali (${req.path})`, semifinali);
    res.send(semifinali);
  } catch (error) {
    console.error(`Errore durante il recupero delle semifinali (${req.path}):`, error);
    res.status(500).send(error);
  }
});

// Endpoint per aggiornare il nome della squadra e il risultato
router.post(["/coppaItaSemifinaleA/semifinaleA", "/coppaItaSemifinaleB/semifinaleB"], async (req, res) => {
  try {
    const model = getModel(req.path);
    if (!model) {
      return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
    }

    const { _id, team1, team2, ris } = req.body;

    // Trova il record per ID e aggiorna i campi team1, team2 e ris
    const semifinali = await model.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

    console.log(`Partita aggiornata (${req.path}):`, semifinali);
    res.send(semifinali);
  } catch (error) {
    console.error(`Errore durante l'aggiornamento della partita (${req.path}):`, error);
    res.status(500).send(error);
  }
});

module.exports = router;
