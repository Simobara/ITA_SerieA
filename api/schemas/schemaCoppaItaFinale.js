require("dotenv").config({ path: "../.env" });

const mongoose = require("mongoose");
const collectionCoppaItaFinale = process.env.COLLECTION_COPPA_ITA_FINALE;

const schemaCoppaItaFinale = new mongoose.Schema(
  {
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
  },
  { collection: collectionCoppaItaFinale },
);

module.exports = schemaCoppaItaFinale;
