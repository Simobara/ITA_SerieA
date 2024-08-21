// COMPONENTE ROUTES COPPAITA SEDICESIMI
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA1/sedicesimiA1
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA2/sedicesimiA2
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA3/sedicesimiA3
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA4/sedicesimiA4
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA5/sedicesimiA5
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA6/sedicesimiA6
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA7/sedicesimiA7
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiA8/sedicesimiA8
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB1/sedicesimiB1
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB2/sedicesimiB2
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB3/sedicesimiB3
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB4/sedicesimiB4
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB5/sedicesimiB5
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB6/sedicesimiB6
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB7/sedicesimiB7
// ENDPOINT: http://localhost:5000/api/coppaItaSedicesimiB8/sedicesimiB8
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const {
  CoppaItaSedicesimiA1,
  CoppaItaSedicesimiA2,
  CoppaItaSedicesimiA3,
  CoppaItaSedicesimiA4,
  CoppaItaSedicesimiA5,
  CoppaItaSedicesimiA6,
  CoppaItaSedicesimiA7,
  CoppaItaSedicesimiA8,
  CoppaItaSedicesimiB1,
  CoppaItaSedicesimiB2,
  CoppaItaSedicesimiB3,
  CoppaItaSedicesimiB4,
  CoppaItaSedicesimiB5,
  CoppaItaSedicesimiB6,
  CoppaItaSedicesimiB7,
  CoppaItaSedicesimiB8,
} = require("../../schemas/schemaCoppaIta");

// Funzione per determinare quale modello utilizzare in base all'URL
const getModel = (path) => {
  if (path.includes("sedicesimiA1")) return CoppaItaSedicesimiA1;
  if (path.includes("sedicesimiA2")) return CoppaItaSedicesimiA2;
  if (path.includes("sedicesimiA3")) return CoppaItaSedicesimiA3;
  if (path.includes("sedicesimiA4")) return CoppaItaSedicesimiA4;
  if (path.includes("sedicesimiA5")) return CoppaItaSedicesimiA5;
  if (path.includes("sedicesimiA6")) return CoppaItaSedicesimiA6;
  if (path.includes("sedicesimiA7")) return CoppaItaSedicesimiA7;
  if (path.includes("sedicesimiA8")) return CoppaItaSedicesimiA8;
  if (path.includes("sedicesimiB1")) return CoppaItaSedicesimiB1;
  if (path.includes("sedicesimiB2")) return CoppaItaSedicesimiB2;
  if (path.includes("sedicesimiB3")) return CoppaItaSedicesimiB3;
  if (path.includes("sedicesimiB4")) return CoppaItaSedicesimiB4;
  if (path.includes("sedicesimiB5")) return CoppaItaSedicesimiB5;
  if (path.includes("sedicesimiB6")) return CoppaItaSedicesimiB6;
  if (path.includes("sedicesimiB7")) return CoppaItaSedicesimiB7;
  if (path.includes("sedicesimiB8")) return CoppaItaSedicesimiB8;
  return null;
};

// Endpoint per prendere i dati dei sedicesimi
router.get(
  [
    "/coppaItaSedicesimiA1/sedicesimiA1",
    "/coppaItaSedicesimiA2/sedicesimiA2",
    "/coppaItaSedicesimiA3/sedicesimiA3",
    "/coppaItaSedicesimiA4/sedicesimiA4",
    "/coppaItaSedicesimiA5/sedicesimiA5",
    "/coppaItaSedicesimiA6/sedicesimiA6",
    "/coppaItaSedicesimiA7/sedicesimiA7",
    "/coppaItaSedicesimiA8/sedicesimiA8",
    "/coppaItaSedicesimiB1/sedicesimiB1",
    "/coppaItaSedicesimiB2/sedicesimiB2",
    "/coppaItaSedicesimiB3/sedicesimiB3",
    "/coppaItaSedicesimiB4/sedicesimiB4",
    "/coppaItaSedicesimiB5/sedicesimiB5",
    "/coppaItaSedicesimiB6/sedicesimiB6",
    "/coppaItaSedicesimiB7/sedicesimiB7",
    "/coppaItaSedicesimiB8/sedicesimiB8",
  ],
  async (req, res) => {
    try {
      const model = getModel(req.path);
      if (!model) {
        return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
      }

      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const sedicesimi = await model
        .find()
        .limit(limit)
        .skip((page - 1) * limit);
      console.log(`Sedicesimi (${req.path})`, sedicesimi);
      res.send(sedicesimi);
    } catch (error) {
      console.error(`Errore durante il recupero dei sedicesimi (${req.path}):`, error);
      res.status(500).send(error);
    }
  },
);

// Endpoint per aggiornare il nome della squadra e il risultato
router.post(
  [
    "/coppaItaSedicesimiA1/sedicesimiA1",
    "/coppaItaSedicesimiA2/sedicesimiA2",
    "/coppaItaSedicesimiA3/sedicesimiA3",
    "/coppaItaSedicesimiA4/sedicesimiA4",
    "/coppaItaSedicesimiA5/sedicesimiA5",
    "/coppaItaSedicesimiA6/sedicesimiA6",
    "/coppaItaSedicesimiA7/sedicesimiA7",
    "/coppaItaSedicesimiA8/sedicesimiA8",
    "/coppaItaSedicesimiB1/sedicesimiB1",
    "/coppaItaSedicesimiB2/sedicesimiB2",
    "/coppaItaSedicesimiB3/sedicesimiB3",
    "/coppaItaSedicesimiB4/sedicesimiB4",
    "/coppaItaSedicesimiB5/sedicesimiB5",
    "/coppaItaSedicesimiB6/sedicesimiB6",
    "/coppaItaSedicesimiB7/sedicesimiB7",
    "/coppaItaSedicesimiB8/sedicesimiB8",
  ],
  async (req, res) => {
    try {
      const model = getModel(req.path);
      if (!model) {
        return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
      }

      const { _id, team1, team2, ris } = req.body;

      // Trova il record per ID e aggiorna i campi team1, team2 e ris
      const sedicesimi = await model.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

      console.log(`Partita aggiornata (${req.path}):`, sedicesimi);
      res.send(sedicesimi);
    } catch (error) {
      console.error(`Errore durante l'aggiornamento della partita (${req.path}):`, error);
      res.status(500).send(error);
    }
  },
);

module.exports = router;
