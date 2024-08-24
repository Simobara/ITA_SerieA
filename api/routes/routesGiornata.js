// COMPONENTE ROUTES GIORNATA
// ENDPOINT: http://localhost:5000/api/giornata/{N}
//! IL FILE E' CORRETTO

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const schemaGiornata = require("../schemas/schemaGiornata");
const dropCollections = require("../DropCollections/dropCollectionGroupColl");

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

    // Cadono Collection non richieste nel database corrispondente vedi file: dropCollectionFileGiornata
    // await dropCollections();
    console.log(`dropCollections Giornata`);

    res.send(nuovaGiornata);
  } catch (error) {
    console.error(`Errore durante l'aggiunta della giornata ${giornataNumber}:`, error);
    res.status(500).send(error);
  }
});

module.exports = router;
