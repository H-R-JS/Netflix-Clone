import { DB } from "../SQL/Connection.js";

export const DeleteFavorite = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).json({ message: "ID movie is missing" });
  try {
    DB.query("SELECT id FROM favorite WHERE id = ?", [id], (err, result) => {});
  } catch (err) {
    console.error(err);
  }
};
