const Issue = require("../sequelize").models.issue;

/**
 * @summary Trouver une issue,
 * @returns
 */

exports.find = async (id) => {
  const issue = await Issue.findOne({ where: { id: id } });
  if (!issue) {
    return null;
  }

  return issue.toJSON();
};

/**
 * @summary Trouver toutes les issues
 * @returns
 */

exports.findAll = async () => {
  const issues = await Issue.findAll();
  if (issues) {
    return null;
  }
  return issues.toJSON();
};

/**
 * @summary Créer une issue
 * @returns
 */

exports.make = async (info) => {
  const issue = await Issue.create(info);
  if (!issue) {
    return null;
  }
  return issue.toJSON();
};

/**
 * @summary Modifier les données d'une issue
 * @returns
 */

exports.edit = async (id, info) => {
  const issue = await Issue.update(info, {
    where: {id},
  });
  if (!issue) {
    return null;
  }
  return issue.toJSON();
};

/**
 * @summary Supprimer une issue
 * @returns
 */

exports.delete = async (id) => {
  const issue = await Issue.destroy({
    where: {id},
  });
  if (!issue) {
    return null;
  }
  return issue.toJSON();
};
