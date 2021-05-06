const mongoose = require("mongoose");

const citySchema = new mongoose.Schema(
  {
    X: { type: Number, required: true },
    Y: { type: Number, required: true },
    lib_zone: { type: String, required: true },
    code_qual: { type: Number, required: true },
    lib_qual: { type: String, required: true },
    code_o3: { type: Number },
    code_no2: { type: Number },
    code_so2: { type: Number },
    code_pm10: { type: Number },
    code_pm25: { type: Number },
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
