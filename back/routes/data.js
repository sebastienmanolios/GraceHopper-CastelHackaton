const express = require("express");
const router = express.Router();
const getDailyData = require("../controllers/dataController");

router.get("/update", getDailyData);

module.exports = router;
