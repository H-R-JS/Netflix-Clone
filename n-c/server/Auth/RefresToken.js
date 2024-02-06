import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { DB } from "../SQL/Connection.js";

dotenv.config();

export const RefreshTokenController = async (req, res) => {
  const cookies = req.cookies;
  // check cookie
  if (!cookies?.jwt) return res.sendStatus(401);
  // get user info in cookie
  const refreshToken = cookies.jwt;
  const User = JSON.parse(
    Buffer.from(refreshToken.split(".")[1], "base64").toString()
  );
  const UserMail = User.UserInfo.email;
  // refresh cookie
  DB.query("SELECT * FROM users WHERE email = ?", [UserMail], (err, result) => {
    if (err) return res.sendStatus(401);
    if (!result) return res.sendStatus(401);
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) return res.sendStatus(403);
        const accessToken = jwt.sign(
          { email: UserMail },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );
        res.json({ UserMail, accessToken });
      }
    );
  });
};
