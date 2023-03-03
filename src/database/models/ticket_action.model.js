const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const TicketAction = sequelize.define(
    "ticket_action",
    {
      intitule: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
      temps: {
        type: DataTypes.INTEGER,
      },
      priorite: {
        type: DataTypes.INTEGER,
      },
    },
    { freezeTableName: "ticket_action" }
  );
  return TicketAction;
};
