import bcryptjs from "bcryptjs";
import { DB } from "../SQL/Connection.js";

export const RegisterController = async (req, res) => {
  const { email, username, password } = req.body;
  // if it's empty
  if (!email || !username || !password)
    return res
      .status(400)
      .json({ message: "Email, Username and password are required !" });
  // crypt password
  const pwd = await bcryptjs.hash(password, 10);
  // if data exist in db
  DB.query("SELECT email FROM users", (err, result) => {
    let duplicateEmail;
    for (let i = 0; i < result.length; i++) {
      if (email === result[i].email) {
        duplicateEmail = email;
      }
    }
    if (duplicateEmail !== undefined) {
      return res.json({ message: `${duplicateEmail} already exist .` });
    } else {
      try {
        // add data into database
        DB.query(
          `INSERT INTO users (email, username, password) VALUES ("${email}","${username}","${pwd}")`
        );
        res.json("DATA is in DB !!!");
      } catch (err) {
        console.error(err);
      }
    }
  });
};
