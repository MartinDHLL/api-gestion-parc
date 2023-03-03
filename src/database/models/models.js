module.exports = (sequelize) => {
  return {
    user: require("./user/user.model")(sequelize),
    entreprise: require("./entreprise/entreprise.model")(sequelize),
    hardware: require("./hardware/hardware.model")(sequelize),
    issue: require("./issue/issue.model")(sequelize),
    solution: require("./solution/solution.model")(sequelize),
    statut: require("./entreprise/entreprise.model")(sequelize),
    ticket: require("./ticket/ticket.model")(sequelize),
    ticket_action: require("./ticket_action/ticket_action.model")(sequelize),
    type: require("./type/type.model")(sequelize),
  };
};
