const express = require('express');
const router = express.Router();
const { create, list, read, remove } = require('../controllers/CategoryController');


const { runValidation } = require('../validators');
const { categoryCreationValidator } = require('../validators/CategoryValidations');

const {
  adminMiddleware,
  requireSignin
} = require('../controllers/authController');

const {
  userSignupValidator
} = require('../validators/authValidations');


router.post('/category', categoryCreationValidator, runValidation, requireSignin, adminMiddleware,  create);
router.get('/categories', list);
router.get('/category/:slug', read);
router.delete('/category/:slug', requireSignin, adminMiddleware, remove);
module.exports = router;
