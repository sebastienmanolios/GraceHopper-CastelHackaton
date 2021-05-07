const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const cityRoutes = require("./routes/city"); 
const userRoutes = require("./routes/user"); 
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config();
connectDB();
const app = express();

//Options Backoffcie Swagger
const swaggerOptions = {
  swaggerDefinition:{
    components: {},
      info: {
          title: 'OCC API',
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

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/cities", cityRoutes);
app.use("/users", userRoutes);
app.use('/city-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const listener = app.listen(process.env.PORT || 5500, () => {
  console.log(
    `App is listening on port ${listener.address().port}`.yellow.bold
  );
});
