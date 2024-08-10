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
