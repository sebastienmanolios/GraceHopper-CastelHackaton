const City = require("../models/cityModel");

const newCity = (req, res, next) => {
  res.json({ message: "POST new city" });
};

const getCities = async (req, res, next) => {
  const cities = await City.find({});
  res.json(cities);
};

module.exports = { newCity, getCities };
