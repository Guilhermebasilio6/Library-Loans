const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Livro = sequelize.define("Livro", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  editora: {
    type: DataTypes.STRING,
  },
  anoPublicacao: {
    type: DataTypes.INTEGER,
  },
  exemplaresTotal: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  sinope: {
    type: DataTypes.TEXT,
  },
  ativo: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
});

module.exports = Livro;
