import mysql2 from "mysql2";

export const DB = mysql2.createConnection({
  host: "eu-cluster-west-01.k8s.cleardb.net",
  user: "bc557acf30fbbf",
  password: "37847792",
  database: "heroku_616762c531dd236",
  // port: "3306",
  //socketPath: "mysql2-socket-path",
});

//mysql://bc557acf30fbbf:37847792@eu-cluster-west-01.k8s.cleardb.net/heroku_616762c531dd236?reconnect=true
