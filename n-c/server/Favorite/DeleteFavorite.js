import { DB } from "../SQL/Connection.js";

export const DeleteFavorite = async (req, res) => {
  const { id } = req.body;

  if (!id) return res.status(400).json({ message: "ID movie is missing" });
  try {
    DB.query("DELETE FROM favorite WHERE id = ?", [id], (err, result) => {
      // console.log(result);
      return res.json(result);
    });
  } catch (err) {
    console.error(err);
  }
  /*try {
    DB.query("SELECT * FROM favorite WHERE id = ?", [id], (err, result) => {
      console.log(result);
      return;
    });
  } catch (err) {
    console.error(err);
  }*/
};
