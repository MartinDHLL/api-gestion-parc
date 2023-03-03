const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Entreprise = sequelize.define(
    "entreprise",
    {
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        unique: true,
      },
      nom: {
        type: DataTypes.STRING,
        unique: true,
      },
      prenom: {
        type: DataTypes.STRING,
      },
      adresse: {
        type: DataTypes.STRING,
      },
      codePostal: {
        type: DataTypes.STRING,
      },
      ville: {
        type: DataTypes.STRING,
      },
      telephone: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: "entreprise" }
  );
  return Entreprise;
};
