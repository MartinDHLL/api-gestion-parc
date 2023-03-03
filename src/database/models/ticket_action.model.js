const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

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
  TicketAction.belongsTo(require("./user.model", { as: "user_id" })(sequelize));
  return TicketAction;
};
