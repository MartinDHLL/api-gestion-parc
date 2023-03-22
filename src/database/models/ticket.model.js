const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      intitule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    { freezeTableName: "ticket" }
  );
  return Ticket;
};
