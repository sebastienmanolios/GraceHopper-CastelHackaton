const express = require("express");
const router = express.Router();
const { updateCity, getCities, getById } = require("../controllers/cityController");

//router.post("/city", newCity);
router.get("/cities", getCities);
router.put("/city", updateCity);
router.get("/city", getById);
module.exports = router;
