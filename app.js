const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World!!!!</h1>
    <p>/error 로 request를 보내면 무슨일이 벌어질까요</p>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8080);
