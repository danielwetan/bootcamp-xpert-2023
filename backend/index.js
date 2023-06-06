const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// DATABASE APLIKASI
let usersDatabase = {}

// -------
// GET - menampilkan data
app.get("/users", (req, res) => {
  res.json(usersDatabase)
})

// -------
// POST - menyimpan data
app.post("/users", (req, res) => {
  let input = req.body
  usersDatabase[input.username] = input

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

  usersDatabase[identifier] = input

  let response = {
    message: "Data berhasil diupdate"
  }

  res.json(response)
})

// -------
// DELETE - menghapus data
app.delete("/users/:username", (req, res) => {
  let identifier = req.params.username
  delete usersDatabase[identifier]

  let response = {
    message: "Data berhasil dihapus"
  }

  res.json(response)
})



let port = 3000

app.listen(port, () => {
  console.log(`application listening on port ${port}`)
})
