const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    max: 20,
    unique: true,
    index: true,
    lowercase: true
  },
  name: {
    type: String,
    trim: true,
    required: true,
    max: 20,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    max: 40,
    unique: true,
    lowercase: true
  },
  profile: {
    type: String,
    required: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  salt: String,
  about: {
    type: String
  },
  role: {
    type: Number,
    trim: true
  },
  photo: {
    data: Buffer,
    contentType: String
  },
  resetPasswordLink: {
    data: String,
    default: ''
  }
}, {
  timestamp: true
});

// Virtual fields do not get persisted in database
// Note arrow functions do not work in this context
userSchema.virtual('password')
  .set(function(password) {
    // create a temp var for password
    this._password = password;
    // generate salt
    this.salt = this.makeSalt();
    // encrypt password
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

userSchema.methods = {
  authenticate: function(password) {
    return this.encryptPassword(password) === this.hashed_password;
  },
  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return crypto.createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },
  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }
};
module.exports = mongoose.model('User', userSchema);
