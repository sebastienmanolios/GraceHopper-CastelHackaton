const express = require("express");
const registerUser = require("../controllers/userController");
const router = express.Router();

/**
* @swagger
* tags:
*   name: User operation
*/

/**
*@swagger
* /user/register:
*    post:
*      tags:
*      - User operation
*      summary: "Create user"
*      description: "This can only be done by the logged in user."
*      operationId: "createUser"
*      produces:
*      - "application/xml"
*      - "application/json"
*      parameters:
*      - in: "body"
*        name: "body"
*        description: "Created user object"
*        required: true
*      example:
*       id: bob
*       name: geo
*      responses:
*        default:
*          description: "successful operation" 
*/

router.route("/register").post(registerUser);


router.post("/login", registerUser);
module.exports = router;
