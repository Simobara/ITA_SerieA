const mongoose = require("mongoose");

const giornataSchema = new mongoose.Schema({
  numeroSelezionato: {
    type: Number,
    required: true,
  },
  giornataClou: {
    type: Boolean,
    default: false,
  },
});

const Giornata = mongoose.model("Giornata", giornataSchema);

module.exports = Giornata;
