const res = require("express/lib/response");

const jwt = required("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split("")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, "Snippet_SceretKEY", {
    expireIn: "1h",
  });
}

module.exports = {
    authenticateToken,
    generateAccessToken,
}
