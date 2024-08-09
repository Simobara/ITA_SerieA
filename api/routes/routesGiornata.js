const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schemaGiornata = require("../schemas/schemaGiornata");

router.get("/giornata/:giornataNumber", async (req, res) => {
  const { giornataNumber } = req.params;

  try {
    const ModelGiornata = mongoose.model(`Giornata${giornataNumber}`, schemaGiornata, `giornata${giornataNumber}`);
    const giornata = await ModelGiornata.find();
    res.send(giornata);
  } catch (error) {
    console.error(`Errore durante il recupero della giornata ${giornataNumber}:`, error);
    res.status(500).send(error);
  }
});

router.post("/giornata/:giornataNumber", async (req, res) => {
  const { giornataNumber } = req.params;

  try {
    const ModelGiornata = mongoose.model(`Giornata${giornataNumber}`, schemaGiornata, `giornata${giornataNumber}`);
    const nuovaGiornata = new ModelGiornata({ giornata: req.body.giornata });
    await nuovaGiornata.save();
    res.send(nuovaGiornata);
  } catch (error) {
    console.error(`Errore durante l'aggiunta della giornata ${giornataNumber}:`, error);
    res.status(500).send(error);
  }
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const schemaGiornata1 = require("../schemas/schemaGiornata1"); // Importa lo schema

// // Definisci il modello usando lo schema
// const Giornata1 = mongoose.model("Giornata1", schemaGiornata1);

// // Endpoint per ottenere tutte le giornate
// router.get("/giornata1", async (req, res) => {
//   try {
//     console.log("giornata.js => Richiesta GET ricevuta a /api/giornate/giornata1");
//     const giornata1 = await Giornata1.find();
//     console.log("Giornate ", giornata1);
//     res.send(giornata1);
//   } catch (error) {
//     console.error("Errore durante il recupero delle giornate:", error);
//     res.status(500).send(error);
//   }
// });

// // Endpoint per aggiungere una nuova giornata
// router.post("/giornata1", async (req, res) => {
//   try {
//     console.log("giornata.js => Richiesta POST ricevuta a /api/giornate/giornata1 con dati:", req.body);
//     const nuovaGiornata1 = new Giornata1(req.body);
//     await nuovaGiornata1.save();
//     console.log("Nuova giornata aggiunta:", nuovaGiornata1);
//     res.send(nuovaGiornata1);
//   } catch (error) {
//     console.error("Errore durante l'aggiunta della nuova giornata:", error);
//     res.status(500).send(error);
//   }
// });

// module.exports = router;
