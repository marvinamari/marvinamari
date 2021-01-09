const express = require('express');
const router = express.Router();
// No we can handle any incoming routes
const {
  create ,
  list   ,
  listAllBlogsCategoriesTags ,
  read   ,
  remove ,
  update ,
  photo
} = require('../controllers/blogController');

const {
  adminMiddleware,
  requireSignin
} = require('../controllers/authController');

router.post('/blog', requireSignin, adminMiddleware, create);
router.get('/blogs', list);
router.post('/blogs-categories-tags', listAllBlogsCategoriesTags);
router.get('/blog/:slug', read);
router.delete('/blog/:slug', requireSignin, adminMiddleware, remove);
router.put('/blog/:slug', requireSignin, adminMiddleware, update);
router.get('/blog/photo/:slug', photo);
// No we export the routes for use in server.js
module.exports = router
