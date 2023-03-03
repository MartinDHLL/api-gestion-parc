const { DataTypes } = require("sequelize");
/* const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(); */

module.exports = (sequelize) => {
  const Type = sequelize.define(
    "type",
    {
      code: {
        type: DataTypes.INTEGER,
      },
      nom: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: "type" }
  );
  Type.hasMany(require("./hardware.model")(sequelize));
  Type.hasMany(require("./issue.model")(sequelize));
  return Type;
};
