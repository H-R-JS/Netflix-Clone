import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
import { Movie } from "./Movie";

export const Row = ({ title, fetchURL }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchURL]);

  console.log(movies);

  return (
    <section>
      <h2 className="text-white p-4">{title}</h2>
      <article className="article-movies position-relative d-flex align-items-center">
        <MdChevronLeft
          className="arrow bg-white rounded-circle position-absolute "
          size={40}
        />
        <div
          id={"slider"}
          className=" movies-container position-relative w-100 h-100"
        >
          {movies.map((item, index) => {
            return <Movie key={index} item={item} />;
          })}
        </div>
        <MdChevronRight
          className="arrow bg-white rounded-circle position-absolute "
          size={40}
        />
      </article>
    </section>
  );
};
