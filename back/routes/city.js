const express = require('express');
const router  = express.Router(); 
const cityController = require('../controllers/cityController');
router.post('/city', cityController.newCity); 

module.exports = router; 