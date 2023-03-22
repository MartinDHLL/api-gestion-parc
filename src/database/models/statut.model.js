const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Statut = sequelize.define(
    "statut",
    {
      code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: "statut" }
  );
  return Statut;
};
