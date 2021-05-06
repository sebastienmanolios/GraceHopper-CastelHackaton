const express = require('express');
const router  = express.Router(); 
const cityController = require('../controllers/tea');
router.post('/city', cityController.newCity); 

module.exports = router; 