import { DB } from "../SQL/Connection.js";

export const FavoriteController = async (req, res) => {
  const { emailUser, id, img, title } = req.body;
  if (!emailUser) res.status(400).json({ message: "User is not connected" });
  if (!id || !img || !title)
    return res.status(400).json({ message: "Data miss on the movie" });
  try {
    DB.query(
      `INSERT INTO favorite (email, id_content, img, title) VALUES ("${emailUser}","${id}","${img}","${title}")`
    );
    res.json("DATA IS IN DB !");
  } catch (err) {
    console.error(err);
  }
};
