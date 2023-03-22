const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Hardware = sequelize.define(
    "hardware",
    {
      libelle: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        allowNull: false,
        unique: true,
      },
      serial_num: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: "hardware" }
  );
  return Hardware;
};
