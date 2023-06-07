const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mysql = require('mysql');
const cors = require('cors');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors()); // Enable CORS

// DATABASE APLIKASI
let usersDatabase = {}

// DATABASE MYSQL
var connection = mysql.createConnection({
  host: '0.0.0.0',
  user: 'root',
  password: 'daniel',
  database: 'xpert-backend'
});

connection.connect();


// connection.end();

// -------
// GET - menampilkan data
app.get("/users", (req, res) => {
  connection.query('SELECT * FROM users;', function (error, results, fields) {
    // if (error) throw error;
    // console.log('The solution is: ', results);

    res.json(results)
  });

  // res.json(usersDatabase)
})

// -------
// POST - menyimpan data
app.post("/users", (req, res) => {
  let input = req.body
  // usersDatabase[input.username] = input

  // Define the INSERT query with placeholders
  const insertQuery = 'INSERT INTO users (username, name, position, location) VALUES (?, ?, ?, ?)';

  // Define the values to be inserted
  const username = input.username;
  const name = input.name;
  const position = input.position;
  const location = input.location;

  // Prepare the values as an array
  const values = [username, name, position, location];

  connection.query(insertQuery, values, function (error, results) {
    console.log("data berhasil disimpan")
  });

  let response = {
    message: "Data berhasil disimpan"
  }

  res.json(response)
})

// -------
// PUT - mengubah data
app.put("/users/:username", (req, res) => {
  let identifier = req.params.username
  let input = req.body // payload dari client

  const updateQuery = 'UPDATE users SET name = ?, location = ?, position = ? WHERE username = ?';

  // Define the dynamic field values
  const username = input.username;
  const name = input.name;
  const position = input.position;
  const location = input.location;

  // Prepare the values as an array
  const values = [name, location, position, username];

  connection.query(updateQuery, values, function (error, results) {
    console.log("data berhasil diupdate")
  });

  let response = {
    message: "Data berhasil diupdate"
  }

  res.json(response)
})

// -------
// DELETE - menghapus data
app.delete("/users/:username", (req, res) => {
  let identifier = req.params.username
  const username = identifier;

  // Prepare the values as an array
  const values = [username];
  const deleteQuery = `DELETE FROM users WHERE username = ?;`

  connection.query(deleteQuery, values, function (error, results) {
    console.log("data berhasil dihapus")
  });

  let response = {
    message: "Data berhasil dihapus"
  }

  res.json(response)
})



let port = 3000

app.listen(port, () => {
  console.log(`application listening on port ${port}`)
})
