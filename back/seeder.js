const connectDB = require("./config/db");
const dotenv = require("dotenv");
const Cities = require("./models/cityModel.js");
const cities = require("./data/cities.json");
const colors = require("colors");

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Cities.deleteMany();
    await Cities.insertMany(cities);
    console.log(`Data imported !`.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`Error at ${error.message}`.red.underline.bold);
  }
};

importData();
