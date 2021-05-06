const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      qualIndex: { type: Number, required: true },
      qualLabel: { type: String, required: true },
      o3Index: { type: Number },
      no2Index: { type: Number},
      so2Index: { type: Number },
      pm10Index: { type: Number },
      pm25Index: { type: Number }
    },
    {
      timestamps: true,
    }
  );

const City = mongoose.model("City", citySchema);
module.exports = City;


/** 
 * "villes": [
    {
      "id": 1,
      "name": "Montpellier",
      "qualIndex": 2,
      "qualLabel": "Moyen",
      "o3Index": "1.23454",
      "no2Index":"1.63454",
      "so2Index":"0.93454",
      "pm10Index":"0.854",
      "pm25Index":"0.7454"
    },
 */