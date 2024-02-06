import { DB } from "../SQL/Connection.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const LoginController = async (req, res) => {
  const { email, password } = req.body;
  // check req.body
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email and Password are required ." });
  // match db sql log
  var sqlDB = async () => {
    DB.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      // check error
      if (!result) return result.status(400).json({ err });
      if (
        !result[0]?.email == email ||
        !bcryptjs?.compare(password, result[0].password)
      ) {
        return result
          .status(400)
          .json({ message: "Email or password is incorrect" });
      } else {
        // create JWT
        const accessToken = jwt.sign(
          {
            UserInfo: {
              email: result[0].email,
              user: result[0].username,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "30s" }
        );

        const refreshToken = jwt.sign(
          {
            UserInfo: {
              email: result[0].email,
              user: result[0].username,
            },
          },
          process.env.REFRESH_TOKEN_SECRET,
          { expiresIn: "1d" }
        );
        res.cookie("jwt", refreshToken, {
          httpOnly: true,

          maxAge: 24 * 60 * 60 * 1000,
        });
        const user = result[0].username;

        return res.json({ email, user, accessToken });
      }
    });
  };
  sqlDB();
};
