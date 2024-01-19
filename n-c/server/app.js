import express from "express";
import mysql from "mysql2";
import cors from "cors";

import { corsOptions } from "./Config/corsOptions.js";

import { connectDB } from "./SQL/Connection.js";
import { LoginController } from "./Auth/Login.js";

const port = 3001;
const app = express();

app.use(express.json());
app.use(cors(corsOptions));

app.post("/login", LoginController);

app.listen(port, () => console.log(`Le port ${port} est ouvert !`));
