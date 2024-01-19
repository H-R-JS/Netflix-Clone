import { connectDB } from "../SQL/Connection";

export const LoginController = (req, res) => {
  let email = req.body.email;
  let password = req.body.pwd;

  if (!email || !password)
    return res
      .status(400)
      .json({ message: "Email and Password are required ." });

  const match = connectDB.query(
    "SELECT * FROM users WHERE email = ? AND password = ? ",
    [email, password],
    (error, results) => {
      if (error) throw error;
      console.log(results);
    }
  );
};
