const express = require('express')
const router = express.Router()
// No we can handle any incoming routes
const {
  create
} = require('../controllers/blogController')

const {
  adminMiddleware,
  requireSignin
} = require('../controllers/authController');

router.post('/blog', requireSignin, adminMiddleware, create);

// No we export the routes for use in server.js
module.exports = router
