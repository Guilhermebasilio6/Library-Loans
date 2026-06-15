const sequelize = require("../config/database");
const { DataTypes } = require("sequelize");

const Emprestimo = sequelize.define("Emprestimo", {
  dataEmprestimo: {
    type: DataTypes.DATEONLY,
    allow: false,
    allowNull: false,
  },
  dataDevolucaoPrevista: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  dataDevolucaoReal: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("ativo", "devolvido", "atrasado"),
    defaultValue: true,
  },
  diasAtraso: {
    type: DataTypes.DATEONLY,
    defaultValue: 0,
  },
  valorMulta: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.0,
  },
  observacoes: {
    type: DataTypes.TEXT,
  },
});

module.exports = Emprestimo;
