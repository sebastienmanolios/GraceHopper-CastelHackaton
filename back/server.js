const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const cityRoutes = require("./routes/city"); // import the routes
const userRoutes = require("./routes/user"); // import the routes
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cities", cityRoutes);
app.use("/users", userRoutes);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
