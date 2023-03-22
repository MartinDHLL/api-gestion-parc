const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Entreprise = sequelize.define(
    "entreprise",
    {
      email: {
        type: DataTypes.STRING,
        validate: { isEmail: true },
        allowNull: false,
        unique: true
      },
      nom: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      prenom: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      adresse: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      codePostal: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ville: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telephone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { freezeTableName: "entreprise" }
  );
  return Entreprise;
};
