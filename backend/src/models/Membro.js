const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Membro = sequelize.define;
("Membro",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telefone: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    dataCadastro: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM("ativo", "suspenso", "inativo"),
      defaultValue: "ativo",
    },
  });

module.exports = Membro;
