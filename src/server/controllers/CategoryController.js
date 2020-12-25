const CategoryModel = require('../models/CategoryModel');
const { errorHandler } = require('../helpers/dbErrorHandler');
const slugify = require('slugify');

exports.create = (req, res) => {
  const {name} = req.body;
  let slug = slugify(name).toLowerCase();

  let category = new CategoryModel({name, slug});
  category.save((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  })
}


exports.list = (req, res) => {
  CategoryModel.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  });
}

exports.read = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  CategoryModel.findOne({slug}).exec((err, category) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(category);
  });
}

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  CategoryModel.findOneAndRemove({slug}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: 'category removed.'
    });
  });
}
