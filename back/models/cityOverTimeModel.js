const mongoose = require("mongoose");

const citiesOverTimeSchema = new mongoose.Schema(
  {
    X: { type: Number, required: true },
    Y: { type: Number, required: true },
    date_dif: { type: Date, required: true },
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

const CitiesOverTime = mongoose.model("CitesOverTime", citiesOverTimeSchema);
module.exports = CitiesOverTime;
