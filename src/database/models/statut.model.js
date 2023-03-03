const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Statut = sequelize.define(
    "statut",
    {
      code: {
        type: DataTypes.INTEGER,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: "statut" }
  );
  return Statut;
};
