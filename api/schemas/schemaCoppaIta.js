require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");

// Definisci lo schema una sola volta
const schemaCoppaIta = new mongoose.Schema({
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

// Crea i modelli per le varie fasi riutilizzando lo stesso schema
const CoppaItaSemifinaleA = mongoose.model("CoppaItaSemifinaleA", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_SEMIF_A);
const CoppaItaSemifinaleB = mongoose.model("CoppaItaSemifinaleB", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_SEMIF_B);
const CoppaItaFinale = mongoose.model("CoppaItaFinale", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_FINALE);

module.exports = { CoppaItaSemifinaleA, CoppaItaSemifinaleB, CoppaItaFinale };
