const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('CI/CD Security pipeline is running!');
});

module.exports = app;
