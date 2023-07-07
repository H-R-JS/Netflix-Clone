import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
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
        <p>
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
