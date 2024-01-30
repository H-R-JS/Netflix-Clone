import { DB } from "../SQL/Connection.js";

export const FavoriteController = async (req, res) => {
  const { emailUser, id, img, title } = req.body;
  // check error
  if (!emailUser) res.status(400).json({ message: "User is not connected" });
  if (!id || !img || !title)
    return res.status(400).json({ message: "Data miss on the movie" });
  // check is favorite already exist
  DB.query(
    "SELECT * FROM favorite WHERE id_content = ?",
    [id],
    (err, result) => {
      if (err) return console.error(err);
      var matchID = [];
      result.forEach((item) => {
        matchID.push({
          id: item.id_content,
        });
      });
      console.log(matchID);
      if (matchID.length > 0) {
        return res.json({ message: "Movie already is in favorites" });
      } else {
        // insert favorite in db
        try {
          DB.query(
            `INSERT INTO favorite (email, id_content, img, title) VALUES ("${emailUser}","${id}","${img}","${title}")`
          );
          res.json("DATA IS IN DB !");
        } catch (err) {
          console.error(err);
        }
      }
    }
  );
};
