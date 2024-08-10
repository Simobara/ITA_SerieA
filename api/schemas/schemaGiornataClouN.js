const mongoose = require("mongoose");
const collectionGiornataClouN = process.env.COLLECTION_GIORNATA_CLOU_N;

const schemaGiornataClouN = new mongoose.Schema(
  {
    numeroSelezionato: {
      type: Number,
      required: true,
    },
    giornataClouN: {
      type: Boolean,
      default: false,
    },
  },
  { collection: collectionGiornataClouN},
);

module.exports = schemaGiornataClouN;
