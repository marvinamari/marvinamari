const express = require('express')
const router = express.Router()
// No we can handle any incoming routes
const {
  time
} = require('../controllers/blogController')

router.get('/', time);

// No we export the routes for use in server.js
module.exports = router
