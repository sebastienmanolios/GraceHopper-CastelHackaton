const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const routes = require('./routes/city'); // import the routes

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
