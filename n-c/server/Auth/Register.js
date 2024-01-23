import bcrypt from "bcrypt";
import { DB } from "../SQL/Connection.js";

export const RegisterController = async (req, res) => {
  const { email, username, password } = req.body;
  console.log(req.body);
  // if it's empty
  if (!email || !username || !password)
    return res
      .status(400)
      .json({ message: "Email, Username and password are required !" });
  // if data exist in db
  const duplicateEmail = DB.query("SELECT email FROM users");
  // if (duplicateEmail) res.status(409).json({ message: "Email already exist" });
  try {
    // crypt password
    const pwd = await bcrypt.hash(password, 10);
    // add data into database
    DB.query(
      `INSERT INTO users (email, username, password) VALUES ("${email}","${username}","${pwd}")`
    );
    res.json("DATA is in DB !!!");
  } catch (err) {
    console.error(err);
  }
};
