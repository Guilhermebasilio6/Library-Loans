const sequelize = require("../config/database");

const Funcionario = require("./Funcionario");
const Livro = require("./Livro");
const Membro = require("./Membro");
const Emprestimo = require("./Emprestimo");

// Emprestimo pertence a Livro, Membro e Funcionario
Emprestimo.belongsTo(Livro, { foreignKey: "livroId", as: "livro" });
Emprestimo.belongsTo(Membro, { foreignKey: "membroId", as: "membro" });
Emprestimo.belongsTo(Funcionario, {
  foreignKey: "funcionarioId",
  as: "funcionario",
});

// Livro e Membro têm vários empréstimos
Livro.hasMany(Emprestimo, { foreignKey: "livroId", as: "emprestimos" });
Membro.hasMany(Emprestimo, { foreignKey: "membroId", as: "emprestimos" });
Funcionario.hasMany(Emprestimo, {
  foreignKey: "funcionarioId",
  as: "emprestimos",
});

// Auditoria: quem criou/atualizou membros e livros
Membro.belongsTo(Funcionario, { foreignKey: "createdBy", as: "criadoPor" });
Membro.belongsTo(Funcionario, { foreignKey: "updatedBy", as: "atualizadoPor" });
Livro.belongsTo(Funcionario, { foreignKey: "createdBy", as: "criadoPor" });
Livro.belongsTo(Funcionario, { foreignKey: "updatedBy", as: "atualizadoPor" });

module.exports = { sequelize, Funcionario, Livro, Membro, Emprestimo };
