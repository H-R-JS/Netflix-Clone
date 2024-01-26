import { DB } from "../SQL/Connection.js";

export const GetFavorites = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400);
  try {
    DB.query(
      "SELECT * FROM favorite WHERE email = ?",
      [email],
      (err, result) => {
        if (!result) return result.status(400).json({ err });
        return res.json({ result });
      }
    );
  } catch (err) {
    console.error(err);
  }
};
