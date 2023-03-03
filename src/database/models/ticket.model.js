const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

module.exports = (sequelize) => {
  const Ticket = sequelize.define(
    "ticket",
    {
      number: {
        type: DataTypes.INTEGER,
      },
      intitule: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: "ticket" }
  );
  Ticket.belongsTo(require("./hardware.model")(sequelize));
  Ticket.hasMany(require("./ticket_action.model")(sequelize), {
    foreignKey: { allowNull: false },
  });
  return Ticket;
};
