require("dotenv").config({ path: "../.env" });
const mongoose = require("mongoose");

// Definizione dello schema comune per tutte le fasi della competizione
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

// Creazione dei modelli per gli ottavi di finale
const CoppaItaOttaviA1 = mongoose.model("CoppaItaOttaviA1", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_A1);
const CoppaItaOttaviA2 = mongoose.model("CoppaItaOttaviA2", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_A2);
const CoppaItaOttaviA3 = mongoose.model("CoppaItaOttaviA3", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_A3);
const CoppaItaOttaviA4 = mongoose.model("CoppaItaOttaviA4", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_A4);
const CoppaItaOttaviB1 = mongoose.model("CoppaItaOttaviB1", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_B1);
const CoppaItaOttaviB2 = mongoose.model("CoppaItaOttaviB2", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_B2);
const CoppaItaOttaviB3 = mongoose.model("CoppaItaOttaviB3", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_B3);
const CoppaItaOttaviB4 = mongoose.model("CoppaItaOttaviB4", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_OTTAVI_B4);

// Creazione dei modelli per i quarti di finale
const CoppaItaQuartiA1 = mongoose.model("CoppaItaQuartiA1", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_QUARTI_A1);
const CoppaItaQuartiA2 = mongoose.model("CoppaItaQuartiA2", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_QUARTI_A2);
const CoppaItaQuartiB1 = mongoose.model("CoppaItaQuartiB1", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_QUARTI_B1);
const CoppaItaQuartiB2 = mongoose.model("CoppaItaQuartiB2", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_QUARTI_B2);

// Creazione dei modelli per le semifinali
const CoppaItaSemifinaleA = mongoose.model("CoppaItaSemifinaleA", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_SEMIF_A);
const CoppaItaSemifinaleB = mongoose.model("CoppaItaSemifinaleB", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_SEMIF_B);

// Creazione del modello per la finale
const CoppaItaFinale = mongoose.model("CoppaItaFinale", schemaCoppaIta, process.env.COLLECTION_COPPA_ITA_FINALE);

module.exports = {
  // CoppaItaOttaviA1,
  // CoppaItaOttaviA2,
  // CoppaItaOttaviA3,
  // CoppaItaOttaviA4,
  // CoppaItaOttaviB1,
  // CoppaItaOttaviB2,
  // CoppaItaOttaviB3,
  // CoppaItaOttaviB4,
  CoppaItaQuartiA1,
  CoppaItaQuartiA2,
  CoppaItaQuartiB1,
  CoppaItaQuartiB2,
  CoppaItaSemifinaleA,
  CoppaItaSemifinaleB,
  CoppaItaFinale,
};