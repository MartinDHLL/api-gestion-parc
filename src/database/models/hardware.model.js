const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

module.exports = (sequelize) => {
  const Hardware = sequelize.define(
    "hardware",
    {
      libelle: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true,
      },
      serial_num: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: "hardware" }
  );
  Hardware.belongsTo(require("./entreprise.model")(sequelize));
  Hardware.belongsTo(require("./type.model")(sequelize));
  Hardware.hasMany(require("./ticket.model")(sequelize));
  return Hardware;
};
