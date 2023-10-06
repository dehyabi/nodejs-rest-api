const express = require('express');
const app = express();
const fs = require('fs');

app.get('/listUsers', function (req, res) {
 fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
  console.log(data);
  res.end(data);
 });
})

const server = app.listen(8081, function () {
 const host = server.address().address
 const port = server.address().port
 console.log("Example app listening at http://%s:%s", host, port)
})
