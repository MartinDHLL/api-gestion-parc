const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

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
  Statut.belongsToMany(require("./ticket_action.model")(sequelize));
  return Statut;
};
