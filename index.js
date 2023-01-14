var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dibakard63@",
  database: "imdb_movies"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM movies", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});