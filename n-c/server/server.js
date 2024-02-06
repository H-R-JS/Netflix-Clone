import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import { corsOptions } from "./Config/corsOptions.js";

//import { DB } from "./SQL/Connection.js";

import { LoginController } from "./Auth/Login.js";
import { RegisterController } from "./Auth/Register.js";
import { FavoriteController } from "./Favorite/FavoriteController.js";
import { GetFavorites } from "./Favorite/GetFavorites.js";
import { DeleteFavorite } from "./Favorite/DeleteFavorite.js";
import { verifyAuth } from "./JWT/verifyAuth.js";
import { RefreshTokenController } from "./Auth/RefresToken.js";
import { LogoutController } from "./Auth/LogoutController.js";

dotenv.config();

const port = 3001;
const app = express();
//DB.connect();

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/login", LoginController);
app.use("/register", RegisterController);
app.use("/addFavorite", FavoriteController);
app.use("/refresh", RefreshTokenController);
app.use("/logout", LogoutController);

app.post("/dataFavorite", GetFavorites);
app.post("/deleteFavorite", DeleteFavorite);

app.get("/verifyAuth", verifyAuth);

app.listen(process.env.PORT || port, () =>
  console.log(`Le port ${port} est ouvert !`)
);
