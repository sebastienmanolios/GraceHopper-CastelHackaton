const csv = require("csvtojson/v2");

const getDailyData = async (req, res, next) => {
  const jsonArray = await csv().fromFile(process.env.DATA_URL);
  res.json(jsonArray);
};

// Async / await usage
// const

module.exports = getDailyData;
