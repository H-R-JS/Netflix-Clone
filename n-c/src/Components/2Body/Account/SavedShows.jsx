import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { useAuth } from "../../Context/useAuth";

export const SavedShows = () => {
  const [movies, setMovies] = useState([]);
  const [delClass, setDelClass] = useState("movie");

  const { auth } = useAuth();

  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const email = auth?.email;
  const getData = async () => {
    console.log(email);
    await axios
      .post("http://localhost:3001/dataFavorite", { email })
      .then((res) => {
        console.log(res.data.result);
        const result = res.data.result;
        setMovies([...result]);
        console.log(movies);
      });
  };

  const deleteData = async (id) => {
    await axios
      .post("http://localhost:3001/deleteFavorite", { id })
      .then((res) => {
        console.log(res.data);
        getData();
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section>
      <h2 className="text-white p-4">My favorites</h2>
      <article className="article-movies position-relative d-flex align-items-center">
        <MdChevronLeft
          onClick={slideLeft}
          className="arrow bg-white rounded-circle position-absolute start-0 "
          size={40}
        />
        <div
          id={"slider"}
          className=" movies-container position-relative w-100 h-100"
        >
          {movies.map((item, index) => {
            return (
              <div
                key={index}
                className="movie d-inline-block position-relative m-2"
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
                  alt={item?.title}
                />
                <div className="img-info position-absolute top-0 left-0 w-100 h-100 p-2 text-white ">
                  <p className="d-flex justify-content-center h-100 align-items-center text-center">
                    {item?.title}
                  </p>
                  <p
                    onClick={() => deleteData(item.id)}
                    className="icon-delete position-absolute"
                  >
                    <AiOutlineClose />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className="arrow bg-white rounded-circle position-absolute end-0 "
          size={40}
        />
      </article>
    </section>
  );
};

/** */
