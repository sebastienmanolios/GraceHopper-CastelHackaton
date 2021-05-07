const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const fs = require("fs");
const http = require("https");
const { promisify } = require("util");
const cityRoutes = require("./routes/city"); // import the routes
const userRoutes = require("./routes/user"); // import the routes
const dataRoutes = require("./routes/data"); // import the routes
const connectDB = require("./config/db");
const cors = require("cors");
const csv = require("csvtojson");

dotenv.config();
connectDB();
<<<<<<< HEAD
const app = express();

//Options Backoffcie Swagger
const swaggerOptions = {
  swaggerDefinition:{
    components: {},
      info: {
          title: 'Occ\'MoveIn API',
          version: '1.0.0',
          description: 'API pour connaître la qualité de l\'air de votre Communauté de commune!'
      },
      servers: [
          {
              url: "http://localhost:5500",
          },
      ],
  },
  apis: ['routes/*.js'],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
=======
>>>>>>> 1ab7207f51e80fd3041268037d555a7d5fba7550

const app = express();
const file = fs.createWriteStream("./data/dailyCSV.csv");
http.get(process.env.DATA_URL, (res) => {
  res.pipe(file);
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cities", cityRoutes);
app.use("/users", userRoutes);
app.use("/data", dataRoutes);

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
