const express = require("express");
const router = express.Router();
const { updateCity, getCities, getById } = require("../controllers/cityController");


router.get("/cities", getCities);
router.put("/city/:lib_zone", updateCity);
router.get('/city/:lib_zone', getById);
module.exports = router;
