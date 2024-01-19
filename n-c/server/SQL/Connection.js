import mysql2 from "mysql2";

export const connectDB = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "accountdb",
});
