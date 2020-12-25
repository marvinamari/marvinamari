const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/TagController');


const { runValidation } = require('../validators');
const { tagCreationValidator } = require('../validators/TagValidations');

const {
  adminMiddleware,
  requireSignin
} = require('../controllers/authController');

const {
  userSignupValidator
} = require('../validators/authValidations');


router.post('/tag', tagCreationValidator, runValidation, requireSignin, adminMiddleware,  create);
router.get('/tags', list);
router.get('/tag/:slug', read);
router.delete('/tag/:slug', requireSignin, adminMiddleware, remove);
module.exports = router;
