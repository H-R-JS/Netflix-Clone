import React from "react";
import ReactDOM from "react-dom/client";
import "./SASS/index.scss";
import "bootstrap/scss/bootstrap.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);