const express = require('express');
const router = express.Router();

const {
  signup,
  signin,
  signout,
  requireSignin
} = require('../controllers/authController');

const {
  runValidation
} = require('../validators');

const {
  userSignupValidator
} = require('../validators/authValidations');

const {
  userSigninValidator
} = require('../validators/authValidations');

router.post('/signup', userSignupValidator, runValidation, signup);
router.post('/signin', userSigninValidator, runValidation, signin);
router.get('/signout', signout);
router.get('/secret', requireSignin, (req, res) => {
  res.json({
    user: req.auth
  });
});

module.exports = router;
