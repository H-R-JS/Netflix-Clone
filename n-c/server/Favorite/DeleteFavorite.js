import { DB } from "../SQL/Connection.js";

export const DeleteFavorite = async (req, res) => {
  const { id } = req.body;
  // check id
  if (!id) return res.status(400).json({ message: "ID movie is missing" });
  // delete favorite
  try {
    DB.query("DELETE FROM favorite WHERE id = ?", [id], (err, result) => {
      return res.json(result);
    });
  } catch (err) {
    console.error(err);
  }
};
