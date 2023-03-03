const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

module.exports = (sequelize) => {
  const Issue = sequelize.define(
    "issue",
    {
      intitule: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    { freezeTableName: "issue" }
  );
  Issue.belongsToMany(require("./ticket_action.model")(sequelize));
  Issue.belongsTo(require("./type.model")(sequelize));
  Issue.hasMany(require("./solution.model")(sequelize));
  return Issue;
};
