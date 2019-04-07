const express = require('express')
const app = express()

const http = require('http');

const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   // res.end('Hello World!!!!\n');
// });

app.get('/', function(req, res) {
  res.send('Get request to the homepage')
})

app.post('/', function(req, res) {
  res.send('POST request to the homepage')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});