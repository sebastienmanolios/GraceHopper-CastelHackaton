const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
