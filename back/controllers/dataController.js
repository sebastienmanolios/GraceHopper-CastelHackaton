const csv = require("csvtojson");
const CitiesOverTime = require("../models/cityOverTimeModel.js");

const getDailyData = (req, res, next) => {
  csv()
    .fromFile("data/dailyCSV.csv")
    .then(async (jsonObj) => {
      console.log(jsonObj);
      try {
        await CitiesOverTime.deleteMany();
        await CitiesOverTime.insertMany(jsonObj);
        console.log(`Data imported !`.green.inverse);
      } catch (error) {
        console.error(`Error at ${error.message}`.red.underline.bold);
      }
      res.end();
    });
};

// Async / await usage
// const

module.exports = getDailyData;
