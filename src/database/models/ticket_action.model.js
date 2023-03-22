const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const TicketAction = sequelize.define(
    "ticket_action",
    {
      intitule: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      temps: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      priorite: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: "ticket_action" }
  );
  return TicketAction;
};
