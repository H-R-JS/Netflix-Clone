import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const verifyAuth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization?.startsWith("Bearer")) return res.senStatus(401);
  const token = authorization.split(" ")[1];

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.senStatus(403);
    req.email = decoded.UserInfo.email;
    req.user = decoded.UserInfo.user;
    next();
  });
};
