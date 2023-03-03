const TicketAction = require("../sequelize").models.ticketAction;

/**
 * @summary Trouver une ticketAction,
 * @returns
 */

exports.find = async (id) => {
  const ticketAction = await TicketAction.findOne({ where: { id: id } });
  if (!ticketAction) {
    return null;
  }

  return ticketAction.toJSON();
};

/**
 * @summary Trouver toutes les ticketActions
 * @returns
 */

exports.findAll = async () => {
  const ticketActions = await TicketAction.findAll();
  if (ticketActions) {
    return null;
  }
  return ticketActions.toJSON();
};

/**
 * @summary Créer une ticketAction
 * @returns
 */

exports.make = async (email) => {
  const ticketAction = await TicketAction.create({
    email: email,
  });
  if (!ticketAction) {
    return null;
  }
  return ticketAction.toJSON();
};

/**
 * @summary Modifier les données d'une ticketAction
 * @returns
 */

exports.edit = async () => {};

/**
 * @summary Supprimer une ticketAction
 * @returns
 */

exports.delete = async () => {};
