// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/coppaItaFinale/finale
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const schemaCoppaItaFinale = require("../schemas/schemaCoppaItaFinale"); // Importa il modello
const CoppaItaFinale = mongoose.model("CoppaItaFinale", schemaCoppaItaFinale);

router.get("/coppaItaFinale/finale", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 10; // Limite di risultati per pagina
    const page = parseInt(req.query.page) || 1; // Numero della pagina
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

// Endpoint per aggiungere un nuovo finale
// router.post("/finale", async (req, res) => {
//   try {
//     console.log("coppaItaFinale.js => Richiesta POST ricevuta a /api/coppaItaFinale/finale con dati:", req.body);
//     const coppaItaFinale = new CoppaItaFinale(req.body);
//     await coppaItaFinale.save();
//     console.log("Nuovo finale aggiunto:", coppaItaFinale);
//     res.send(coppaItaFinale);
//   } catch (error) {
//     console.error("Errore durante l'aggiunta del nuovo finale:", error);
//     res.status(500).send(error);
//   }
// });

module.exports = router;
