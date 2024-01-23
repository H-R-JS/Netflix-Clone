import mysql2 from "mysql2";

export const DB = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "accountdb",
});
