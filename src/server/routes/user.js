const express = require('express');
const router = express.Router();
const { read } = require('../controllers/userController');

const {
  authMiddleware,
  requireSignin
} = require('../controllers/authController');



router.get('/profile', requireSignin, authMiddleware, read );

module.exports = router;
