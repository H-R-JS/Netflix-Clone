import { DB } from "../SQL/Connection.js";
import bcrypt from "bcrypt";
import { render } from "@testing-library/react";

export const LoginController = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email and Password are required ." });

  var sqlDB = (data) => {
    DB.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
      // check error
      if (!result) return result.status(400).json({ err });
      if (!result[0].email == email) return result.status(400).json({ err });
      try {
        bcrypt.compare(password, result[0].password);
        render(result);
      } catch (err) {
        console.error(err);
      }

      data = result;
      // console.log(data);
    });
    return data;
  };

  const dataSQL = console.log(sqlDB());
};
