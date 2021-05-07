const express = require("express");
const router = express.Router();
const { updateCity, getCities, getById } = require("../controllers/cityController");



/**
 * @swagger
 * /cities/cities:
 *  get:
 *      summary: "Get All Cities"
 *      tags: [Get operations]
 *      description: Get All CC
 *      responses: 
 *          200:
 *              description: Succes de la requête
 */
router.get("/cities", getCities);

/**
 * @swagger
 * /cities/city/{lib_zone}:
 *   get:
 *     summary: Get City ByName
 *     description: Return Single CC 
 *     tags: [Get operations]
 *     parameters:
 *       - in: path
 *         name: lib_zone
 *         required: true
 *         schema:
 *          type: string
 *     responses:
 *       200:
 *         description: Succes de la requête
 *         
 */
router.get('/city/:lib_zone', getById);

// **** NEED TO IMPLEMENT THE BODY SENT***
// **** -------------------------------***
/**
 * @swagger
 * /cities/city/{lib_zone}:
 *   put:
 *      summary: Update City ByName
 *      description: Update Single CC 
 *      tags: [Update operation]
 *      parameters: 
 *       - in: path
 *         name: lib_zone
 *         required: true
 *         schema:
 *         type: string
 *      responses: 
 *       200:
 *         description: Modification enregistrée
 */
router.put("/city/:lib_zone", updateCity);

module.exports = router;
