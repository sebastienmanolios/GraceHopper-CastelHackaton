const express = require("express");
const router = express.Router();
const { newCity, getCities } = require("../controllers/cityController");

router.post("/city", newCity);
router.get("/cities", getCities);

module.exports = router;
