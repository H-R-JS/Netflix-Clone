import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../Context/AuthContext";
import { db } from "../../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "uUsers", `${user?.email}`);

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path,
        }),
      });
    } else {
      alert("Veuillez vous connecter pour mettre un film en favorie .");
    }
  };

  return (
    <div className="movie d-inline-block position-relative m-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
      />
      <div className="img-info position-absolute top-0 left-0 w-100 h-100 p-2 text-white ">
        <p className="d-flex justify-content-center h-100 align-items-center text-center">
          {item?.title}
        </p>
        <p onClick={saveShow}>
          {like ? (
            <FaHeart className="icon-heart position-absolute text-gray" />
          ) : (
            <FaRegHeart className="icon-heart position-absolute text-gray" />
          )}
        </p>
      </div>
    </div>
  );
};
