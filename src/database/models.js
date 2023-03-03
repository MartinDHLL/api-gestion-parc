module.exports = (sequelize) => {
  const User = require("./models/user.model")(sequelize);
  const Entreprise = require("./models/entreprise.model")(sequelize);
  const Hardware = require("./models/hardware.model")(sequelize);
  const Issue = require("./models/issue.model")(sequelize);
  const Solution = require("./models/solution.model")(sequelize);
  const Statut = require("./models/entreprise.model")(sequelize);
  const Ticket = require("./models/ticket.model")(sequelize);
  const TicketAction = require("./models/ticket_action.model")(sequelize);
  const Type = require("./models/type.model")(sequelize);

  // 🔗 relations de la table User avec les autres tables
  User.hasMany(TicketAction);

  // 🔗 relations de la table TicketAction avec les autres tables
  TicketAction.belongsTo(User);
  TicketAction.belongsTo(Statut);
  TicketAction.belongsTo(Issue);
  TicketAction.belongsTo(Ticket);

  // 🔗 relations de la table Entreprise avec les autres tables
  Entreprise.hasMany(Hardware);

  // 🔗 relations de la table Hardware avec les autres tables
  Hardware.belongsTo(Entreprise);
  Hardware.belongsTo(Type);
  Hardware.hasMany(Ticket);

  // 🔗 relations de la table Issue avec les autres tables
  Issue.hasMany(TicketAction);
  Issue.belongsTo(Type);
  Issue.hasMany(Solution);

  // 🔗 relations de la table Solution avec les autres tables
  Solution.belongsTo(Issue);

  // 🔗 relations de la table Statut avec les autres tables
  Statut.hasMany(TicketAction);

  // 🔗 relations de la table Ticket avec les autres tables
  Ticket.belongsTo(Hardware);
  Ticket.hasMany(TicketAction, {
    foreignKey: { allowNull: false },
  });

  // 🔗 relations de la table Type avec les autres tables
  Type.hasMany(Hardware);
  Type.hasMany(Issue);

  // ⤴️ retourne tous les modèles avec leurs relations
  return {
    user: User,
    entreprise: Entreprise,
    hardware: Hardware,
    issue: Issue,
    solution: Solution,
    statut: Statut,
    ticket: Ticket,
    ticketAction: TicketAction,
    type: Type,
  };
};
/* 
  pour la synchronisation automatique des modèles avec la base de données,
  tout se passe sur le main.js
*/
