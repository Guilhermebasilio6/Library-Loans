const jwt = require("jsonwebtoken");

function autenticar(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ erro: "token não fornecido. " });
  }

  try {
    const dados = jwt.verify(token, process.env.JWT_SECRET);
    req.user = dados;
    next();
  } catch (error) {
    return res.status(401).json({ erro: "token inválido ou expirado " });
  }
}

function justAdmin(req, res, next) {
  if (req.user.perfil !== "admin") {
    return res.status(403).json({ erro: "Acesso restrito ao administrador" });
  }
  next();
}

module.exports = { autenticar, justAdmin };
