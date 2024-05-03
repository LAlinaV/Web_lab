const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.get('/files/info.json', (req, res) => {
  res.sendFile(path.join(__dirname + '/files/info.json'));
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});