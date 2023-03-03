const Ticket = require("../sequelize").models.ticket;

/**
 * @summary Trouver une ticket,
 * @returns
 */

exports.find = async (id) => {
  const ticket = await Ticket.findOne({ where: { id: id } });
  if (!ticket) {
    return null;
  }

  return ticket.toJSON();
};

/**
 * @summary Trouver toutes les tickets
 * @returns
 */

exports.findAll = async () => {
  const tickets = await Ticket.findAll();
  if (tickets) {
    return null;
  }
  return tickets.toJSON();
};

/**
 * @summary Créer une ticket
 * @returns
 */

exports.make = async (email) => {
  const ticket = await Ticket.create({
    email: email,
  });
  if (!ticket) {
    return null;
  }
  return ticket.toJSON();
};

/**
 * @summary Modifier les données d'une ticket
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une ticket
 * @returns
 */

exports.delete = async () => {};
