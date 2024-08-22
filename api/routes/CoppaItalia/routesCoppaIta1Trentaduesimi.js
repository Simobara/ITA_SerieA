// COMPONENTE ROUTES COPPAITA TRENTADUESIMI
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA1/trentaduesimiA1
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA2/trentaduesimiA2
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA3/trentaduesimiA3
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA4/trentaduesimiA4
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA5/trentaduesimiA5
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA6/trentaduesimiA6
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA7/trentaduesimiA7
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiA8/trentaduesimiA8
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB1/trentaduesimiB1
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB2/trentaduesimiB2
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB3/trentaduesimiB3
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB4/trentaduesimiB4
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB5/trentaduesimiB5
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB6/trentaduesimiB6
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB7/trentaduesimiB7
// ENDPOINT: http://localhost:5000/api/coppaItaTrentaduesimiB8/trentaduesimiB8
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();

const {
  CoppaItaTrentaduesimiA1,
  CoppaItaTrentaduesimiA2,
  CoppaItaTrentaduesimiA3,
  CoppaItaTrentaduesimiA4,
  CoppaItaTrentaduesimiA5,
  CoppaItaTrentaduesimiA6,
  CoppaItaTrentaduesimiA7,
  CoppaItaTrentaduesimiA8,
  CoppaItaTrentaduesimiB1,
  CoppaItaTrentaduesimiB2,
  CoppaItaTrentaduesimiB3,
  CoppaItaTrentaduesimiB4,
  CoppaItaTrentaduesimiB5,
  CoppaItaTrentaduesimiB6,
  CoppaItaTrentaduesimiB7,
  CoppaItaTrentaduesimiB8,
} = require("../../schemas/schemaCoppaIta");

// Funzione per determinare quale modello utilizzare in base all'URL
const getModel = (path) => {
  if (path.includes("trentaduesimiA1")) return CoppaItaTrentaduesimiA1;
  if (path.includes("trentaduesimiA2")) return CoppaItaTrentaduesimiA2;
  if (path.includes("trentaduesimiA3")) return CoppaItaTrentaduesimiA3;
  if (path.includes("trentaduesimiA4")) return CoppaItaTrentaduesimiA4;
  if (path.includes("trentaduesimiA5")) return CoppaItaTrentaduesimiA5;
  if (path.includes("trentaduesimiA6")) return CoppaItaTrentaduesimiA6;
  if (path.includes("trentaduesimiA7")) return CoppaItaTrentaduesimiA7;
  if (path.includes("trentaduesimiA8")) return CoppaItaTrentaduesimiA8;
  if (path.includes("trentaduesimiB1")) return CoppaItaTrentaduesimiB1;
  if (path.includes("trentaduesimiB2")) return CoppaItaTrentaduesimiB2;
  if (path.includes("trentaduesimiB3")) return CoppaItaTrentaduesimiB3;
  if (path.includes("trentaduesimiB4")) return CoppaItaTrentaduesimiB4;
  if (path.includes("trentaduesimiB5")) return CoppaItaTrentaduesimiB5;
  if (path.includes("trentaduesimiB6")) return CoppaItaTrentaduesimiB6;
  if (path.includes("trentaduesimiB7")) return CoppaItaTrentaduesimiB7;
  if (path.includes("trentaduesimiB8")) return CoppaItaTrentaduesimiB8;
  return null;
};

// Endpoint per prendere i dati dei trentaduesimi
router.get(
  [
    "/coppaItaTrentaduesimiA1/trentaduesimiA1",
    "/coppaItaTrentaduesimiA2/trentaduesimiA2",
    "/coppaItaTrentaduesimiA3/trentaduesimiA3",
    "/coppaItaTrentaduesimiA4/trentaduesimiA4",
    "/coppaItaTrentaduesimiA5/trentaduesimiA5",
    "/coppaItaTrentaduesimiA6/trentaduesimiA6",
    "/coppaItaTrentaduesimiA7/trentaduesimiA7",
    "/coppaItaTrentaduesimiA8/trentaduesimiA8",
    "/coppaItaTrentaduesimiB1/trentaduesimiB1",
    "/coppaItaTrentaduesimiB2/trentaduesimiB2",
    "/coppaItaTrentaduesimiB3/trentaduesimiB3",
    "/coppaItaTrentaduesimiB4/trentaduesimiB4",
    "/coppaItaTrentaduesimiB5/trentaduesimiB5",
    "/coppaItaTrentaduesimiB6/trentaduesimiB6",
    "/coppaItaTrentaduesimiB7/trentaduesimiB7",
    "/coppaItaTrentaduesimiB8/trentaduesimiB8",
  ],
  async (req, res) => {
    try {
      const model = getModel(req.path);
      if (!model) {
        return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
      }

      const limit = parseInt(req.query.limit) || 10;
      const page = parseInt(req.query.page) || 1;
      const trentaduesimi = await model
        .find()
        .limit(limit)
        .skip((page - 1) * limit);
      console.log(`Trentaduesimi (${req.path})`, trentaduesimi);
      res.send(trentaduesimi);
    } catch (error) {
      console.error(`Errore durante il recupero dei trentaduesimi (${req.path}):`, error);
      res.status(500).send(error);
    }
  },
);

// Endpoint per aggiornare il nome della squadra e il risultato
router.post(
  [
    "/coppaItaTrentaduesimiA1/trentaduesimiA1",
    "/coppaItaTrentaduesimiA2/trentaduesimiA2",
    "/coppaItaTrentaduesimiA3/trentaduesimiA3",
    "/coppaItaTrentaduesimiA4/trentaduesimiA4",
    "/coppaItaTrentaduesimiA5/trentaduesimiA5",
    "/coppaItaTrentaduesimiA6/trentaduesimiA6",
    "/coppaItaTrentaduesimiA7/trentaduesimiA7",
    "/coppaItaTrentaduesimiA8/trentaduesimiA8",
    "/coppaItaTrentaduesimiB1/trentaduesimiB1",
    "/coppaItaTrentaduesimiB2/trentaduesimiB2",
    "/coppaItaTrentaduesimiB3/trentaduesimiB3",
    "/coppaItaTrentaduesimiB4/trentaduesimiB4",
    "/coppaItaTrentaduesimiB5/trentaduesimiB5",
    "/coppaItaTrentaduesimiB6/trentaduesimiB6",
    "/coppaItaTrentaduesimiB7/trentaduesimiB7",
    "/coppaItaTrentaduesimiB8/trentaduesimiB8",
  ],
  async (req, res) => {
    try {
      const model = getModel(req.path);
      if (!model) {
        return res.status(400).send("Modello non trovato per l'endpoint richiesto.");
      }

      const { _id, team1, team2, ris } = req.body;

      // Trova il record per ID e aggiorna i campi team1, team2 e ris
      const trentaduesimi = await model.findByIdAndUpdate(_id, { team1, team2, ris }, { new: true });

      console.log(`Partita aggiornata (${req.path}):`, trentaduesimi);
      res.send(trentaduesimi);
    } catch (error) {
      console.error(`Errore durante l'aggiornamento della partita (${req.path}):`, error);
      res.status(500).send(error);
    }
  },
);

module.exports = router;
