const {
  check
} = require('express-validator');

exports.userSignupValidator = [
  check('name')
  .not()
  .isEmpty()
  .withMessage('Name is required'),
  check('email')
  .isEmail()
  .withMessage('Must be a valid email address.'),
  check('password')
  .isLength({
    min: 9
  })
  .withMessage('Password must be minimum 9 characters.'),
  check('username')
  .not()
  .isEmpty()
  .isAlphanumeric()
  .withMessage('invalid username must be contain only letters and numbers.')
];

exports.userSigninValidator = [
  check('username')
  .not()
  .isEmpty()
  .isAlphanumeric()
  .withMessage('invalid username must be contain only letters and numbers.'),
  check('password')
  .isLength({
    min: 9
  })
  .withMessage('Password must be minimum 9 characters long.')
];
