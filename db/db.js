const mysql = require("mysql");

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "adhar",
});

conn.connect((err) => {
  err ? console.log(err) : console.log("connected");
});

module.export = conn;
