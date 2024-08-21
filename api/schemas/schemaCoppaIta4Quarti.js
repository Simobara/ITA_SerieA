require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const collectionCoppaItaQuartiA1 = process.env.COLLECTION_COPPA_ITA_QUARTI_A1;
const collectionCoppaItaQuartiA2 = process.env.COLLECTION_COPPA_ITA_QUARTI_A2;
const collectionCoppaItaQuartiB1 = process.env.COLLECTION_COPPA_ITA_QUARTI_B1;
const collectionCoppaItaQuartiB2 = process.env.COLLECTION_COPPA_ITA_QUARTI_B2;

const schemaCoppaItaQuarti = new mongoose.Schema({
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

const CoppaItaQuartiA1 = mongoose.model("CoppaItaQuartiA1", schemaCoppaItaQuarti, collectionCoppaItaQuartiA1);
const CoppaItaQuartiA2 = mongoose.model("CoppaItaQuartiA2", schemaCoppaItaQuarti, collectionCoppaItaQuartiA2);
const CoppaItaQuartiB1 = mongoose.model("CoppaItaQuartiB1", schemaCoppaItaQuarti, collectionCoppaItaQuartiB1);
const CoppaItaQuartiB2 = mongoose.model("CoppaItaQuartiB2", schemaCoppaItaQuarti, collectionCoppaItaQuartiB2);

module.exports = { CoppaItaQuartiA1, CoppaItaQuartiA2, CoppaItaQuartiB1, CoppaItaQuartiB2 };
