const mongoose = require("mongoose");
const collectionGiornataClou = process.env.COLLECTION_GIORNATA_CLOU;

const schemaGiornataClouN = new mongoose.Schema(
  {
    numeroSelezionato: {
      type: Number,
      required: true,
    },
    giornataClou: {
      type: Boolean,
      default: false,
    },
  },
  { collection: collectionGiornataClou },
);

module.exports = schemaGiornataClouN;
