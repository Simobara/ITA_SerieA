const mongoose = require("mongoose");

const schemaPartita = new mongoose.Schema(
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
  { _id: false }, // Disabilita l'_id per i subdocumenti
);

const schemaGiornata = new mongoose.Schema({
  giornata: [schemaPartita],
});

module.exports = schemaGiornata;

// const mongoose = require("mongoose");
// const collectionGiornata1 = process.env.COLLECTION_GIORNATA1;

// const schemaGiornata1 = new mongoose.Schema(
//   {
//     giornata1: [
//       {
//         numero: {
//           type: Number,
//           required: true,
//         },
//         day: {
//           type: String,
//           required: true,
//         },
//         time: {
//           type: String,
//           required: true,
//         },
//         team1: {
//           type: String,
//           required: true,
//         },
//         team2: {
//           type: String,
//           required: true,
//         },
//         pron: {
//           type: String,
//           default: "",
//         },
//         results: {
//           type: String,
//           default: "",
//         },
//       },
//     ],
//   },
//   { collection: collectionGiornata1 },
// );

// module.exports = schemaGiornata1;
