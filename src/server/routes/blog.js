const express = require('express')
const router = express.Router()
// No we can handle any incoming routes

router.get('/', (req, res) => {
  res.json({time: Date().toString()});
})

// No we export the routes for use in server.js
module.exports = router
