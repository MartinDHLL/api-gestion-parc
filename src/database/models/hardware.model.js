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
  return Hardware;
};
