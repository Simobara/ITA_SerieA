const mongoose = require("mongoose");
const collectionGiornata = process.env.COLLECTION_GIORNATA;

const giornataSchema = new mongoose.Schema(
  {
    giornata: [
      {
        numero: {
          type: Number,
          required: true,
        },
        day: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
        team1: {
          type: String,
          required: true,
        },
        team2: {
          type: String,
          required: true,
        },
        pron: {
          type: String,
          default: "",
        },
        results: {
          type: String,
          default: "",
        },
      },
    ],
  },
  {
    collection: collectionGiornata,
    _id: false, // Questa opzione viene applicata ai subdocumenti se definita direttamente nello schema principale
  },
);

module.exports = mongoose.model("Giornata", giornataSchema);
