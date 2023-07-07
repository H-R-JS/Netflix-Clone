import React from "react";
import { BigPage } from "./BigPage";
import { Row } from "./Row";
import { request } from "../../Request";

export const Home = () => {
  return (
    <main className="main-home w-100 ">
      <BigPage />
      <Row title="Up Coming" fetchURL={request.requestUpComing} />
      <Row title="Popular" fetchURL={request.requestPopular} />
      <Row title="Trending" fetchURL={request.requestTrending} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="Horror" fetchURL={request.requestHorror} />
    </main>
  );
};
