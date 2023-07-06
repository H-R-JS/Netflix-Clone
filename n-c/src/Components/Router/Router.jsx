import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../2Body/Home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
