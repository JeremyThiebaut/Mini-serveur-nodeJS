const mysql = require("mysql");

const Connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "enquete",
});

module.exports = Connection;
