import express from "express";
import mysql from "mysql2";
import cors from "cors";
import cookieParser from "cookie-parser";

import { corsOptions } from "./Config/corsOptions.js";

import { DB } from "./SQL/Connection.js";
import { LoginController } from "./Auth/Login.js";
import { RegisterController } from "./Auth/Register.js";
import { FavoriteController } from "./Favorite/FavoriteController.js";
import { GetFavorites } from "./Favorite/GetFavorites.js";
import { DeleteFavorite } from "./Favorite/DeleteFavorite.js";
import { verifyAuth } from "./JWT/verifyAuth.js";
import { RefreshTokenController } from "./Auth/refresToken.js";

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/login", LoginController);
app.use("/register", RegisterController);
app.use("/addFavorite", FavoriteController);
app.use("/refresh", RefreshTokenController);

app.post("/dataFavorite", GetFavorites);
app.post("/deleteFavorite", DeleteFavorite);

app.get("/verifyAuth", verifyAuth);

app.listen(port, () => console.log(`Le port ${port} est ouvert !`));
