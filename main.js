const { config } = require("./src/configs/app.config");
const helmet = require("helmet");
const express = require("express");
const db = require("./src/database/sequelize");
const app = express();

app.use(express.json());
app.use(helmet());

require("./src/routes/routes")(app);

// synchronisation automatique des modèles avec la base de données
db.sequelize.sync();

app.listen(config.port, (error) => {
  if (error) {
    console.log(`error ${error}`);
  }
  console.log(`Application ready on port ${config.port}`);
});
