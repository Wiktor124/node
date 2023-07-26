const express = require('express')

const testRoutes = express.Router()

testRoutes.get('/', (req, res) => {
  res.sendStatus(200)
});

testRoutes.get('/about', (req, res) => {
  res.send('Hello World!')
});

module.exports = testRoutes;