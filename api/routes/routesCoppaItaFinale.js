//QUESTO FILE E' CORRETTO

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schemaCoppaItaFinale = require("../schemas/schemaCoppaItaFinale"); // Importa il modello

// Definisci il modello CoppaItaFinale utilizzando la connessione corrente di Mongoose
const CoppaItaFinale = mongoose.model("CoppaItaFinale", schemaCoppaItaFinale);

// Endpoint per ottenere tutti i finali
router.get("/finale", async (req, res) => {
  try {
    console.log("coppaItaFinale.js => Richiesta GET ricevuta a /api/coppaItaFinale/finale");
    const finale = await CoppaItaFinale.find();
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
