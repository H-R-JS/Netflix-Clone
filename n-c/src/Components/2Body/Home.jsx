import React, { useState, useEffect } from "react";
import axios from "axios";
import { request } from "../../Request";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(request.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movie);

  const cutString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <main className="main-home w-100 ">
      <div className="back-gradient position-absolute w-100"></div>
      <img
        className="img-netflix w-100 object-fit-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
      />
      <section className="section-home position-absolute w-100 p-4">
        <h1>{movie?.title}</h1>
        <button className="bg-light py-2 px-4 ">Play</button>
        <button className="border border-light py-2 px-4 mx-4 text-white">
          Watch Later
        </button>
        <p className="text-secondary my-3">Released: {movie?.release_date}</p>
        <p className="w-50">{cutString(movie?.overview, 120)}</p>
      </section>
    </main>
  );
};
