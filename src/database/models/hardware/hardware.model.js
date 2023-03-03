const { DataTypes } = require("sequelize");

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
