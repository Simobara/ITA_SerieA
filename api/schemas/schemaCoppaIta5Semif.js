require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const collectionCoppaItaSemifinaleA = process.env.COLLECTION_COPPA_ITA_SEMIF_A;
const collectionCoppaItaSemifinaleB = process.env.COLLECTION_COPPA_ITA_SEMIF_B;

// Definizione dello schema condiviso per entrambe le semifinali
const schemaCoppaItaSemifinale = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  pos: {
    type: String,
    default: "",
  },
  team1: {
    type: String,
    default: "",
  },
  team2: {
    type: String,
    default: "",
  },
  ris: {
    type: String,
    default: "",
  },
});

// Creazione dei modelli specifici per le collezioni A e B
const CoppaItaSemifinaleA = mongoose.model("CoppaItaSemifinaleA", schemaCoppaItaSemifinale, collectionCoppaItaSemifinaleA);
// const CoppaItaSemifinaleB = mongoose.model("CoppaItaSemifinaleB", schemaCoppaItaSemifinale, collectionCoppaItaSemifinaleB);

// module.exports = { CoppaItaSemifinaleA, CoppaItaSemifinaleB };
module.exports = { CoppaItaSemifinaleA };
