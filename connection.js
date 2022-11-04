const mysql = require('mysql2');

// create the connection to database
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delite_shop'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connection created on db name: <.... delite_shop ....>!!");
});

module.exports.con = con;