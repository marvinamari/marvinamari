const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
  User.findOne({
    email: req.body.email
  }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'This user already has an account.'
      });
    }
  })

  User.findOne({
    username: req.body.username
  }).exec((err, user) => {
    if (user) {
      return res.status(400).json({
        error: 'Username already taken.'
      });
    }

    const {
      name,
      email,
      password,
      username
    } = req.body;
    let profile = `${process.env.CLIENT_URL}/profile/${username}`;
    let newUser = new User({
      name,
      email,
      password,
      profile,
      username
    });

    newUser.save((err, success) => {
      if (err) {
        return res.status(400).json({
          error: err
        })
      }
      res.json({
        message: 'Signup success!'
      });
    })
  })
};

exports.signin = (req, res) => {
  // check if user exists
  const {
    username,
    password
  } = req.body;

  User.findOne({
    username
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'no such user exist, please sign up.'
      });
    }
    // authenticate
    if (!user.authenticate(password)) {
      return res.status(400).json({
        error: 'email and password do not match.'
      });
    }
    // generate token and send to client
    const token = jwt.sign({
      _id: user._id
    }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });
    // set token in cookies
    res.cookie(
      'token',
      token, {
        expiresIn: '1d'
      }
    );

    const {
      _id,
      username,
      name,
      email,
      role
    } = user;

    return res.json({
      token,
      user: {
        _id,
        username,
        name,
        email,
        role
      }
    });
  });
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({
    message: 'signout success!'
  });
};

// middleware applied to routes we want to protect
// i.e. logged in users, this  checks incoming secret with system secret
// and checks if token expired
exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
  userProperty: 'auth',
});

exports.authMiddleware = (req, res, next) => {
  const authUserId = req.auth._id;
  User.findById({_id: authUserId})
  .exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    req.profile = user;
    next();
  })
};

exports.adminMiddleware = (req, res, next) => {
  const adminUserId = req.auth._id;
  User.findById({_id: adminUserId})
  .exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }
    if (user.role !== 1) {
      return res.status(400).json({
        error: 'Admin resource. Access denied.'
      });
    }
    req.profile = user;
    next();
  })
};
