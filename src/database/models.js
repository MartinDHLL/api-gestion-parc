module.exports = (sequelize) => {
  return {
    user: require("./models/user.model")(sequelize),
    entreprise: require("./models/entreprise.model")(sequelize),
    hardware: require("./models/hardware.model")(sequelize),
    issue: require("./models/issue.model")(sequelize),
    solution: require("./models/solution.model")(sequelize),
    statut: require("./models/entreprise.model")(sequelize),
    ticket: require("./models/ticket.model")(sequelize),
    ticket_action: require("./models/ticket_action.model")(sequelize),
    type: require("./models/type.model")(sequelize),
  };
};
