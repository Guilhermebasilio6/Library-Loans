const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Funcionario = require("../models/Funcionario");

const login = async (req, res) => {
  const { email, senha } = req.body;

  // Busca o funcionario pelo email
  try {
    const funcionario = await Funcionario.findOne({ where: { email } });

    if (!funcionario) {
      return res.status(401).json({ message: "E-mail ou senha inválidos" });
    }
    // Verifica se o funcionario está ativo (RN01)
    if (!funcionario.status) {
      return res.status(403).json({ message: "Funcionário inativo" });
    }
    // Compara a senha
    const senhaValida = await bcrypt.compare(senha, funcionario.senha_hash);

    if (!senhaValida) {
      return res.status(401).json({ message: "E-mail ou senha inválidos" });
    }
    // Gera o token JWT
    const token = jwt.sign(
      { id: funcionario.id, perfil: funcionario.perfil },
      process.env.JWT_SECRET,
      { expiresIn: "8h" },
    );

    res.json({
      token,
      funcionario: {
        id: funcionario.id,
        nome: funcionario.nome,
        email: funcionario.email,
        perfil: funcionario.perfil,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};

async function me(req, res) {
  try {
    const funcionario = await Funcionario.findByPk(req.user.id, {
      attributes: { exclude: ["senha_hash"] },
    });
    return res.json(funcionario);
  } catch (error) {
    return res.status(500).json({ erro: "Erro interno do servidor" });
  }
}

module.exports = { login, me };
