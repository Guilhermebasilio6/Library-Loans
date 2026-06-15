const sequelize = require("../config/database");
const { DataTypes } = sequelize;

const Emprestimo = sequelize.define("Emprestimo", {
  dataEmprestimo: {
    type: DataTypes.DATEONLY,
    allow: false,
  },
});
