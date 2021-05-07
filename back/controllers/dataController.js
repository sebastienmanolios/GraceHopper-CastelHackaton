const csv = require("csvtojson");

const getDailyData = (req, res, next) => {
  csv()
    .fromFile("../data/dailyCSV.csv")
    .then((jsonObj) => {
      console.log(jsonObj);
      res.end();
    });
};

// Async / await usage
// const

module.exports = getDailyData;
