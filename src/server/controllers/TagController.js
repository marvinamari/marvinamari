const TagModel = require('../models/TagModel');
const { errorHandler } = require('../helpers/dbErrorHandler');
const slugify = require('slugify');

exports.create = (req, res) => {
  const {name} = req.body;
  let slug = slugify(name).toLowerCase();

  let tag = new TagModel({name, slug});
  tag.save((err, data) => {
    if(err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(data);
  })
}


exports.list = (req, res) => {
  TagModel.find({}).exec((err, data) => {
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
  TagModel.findOne({slug}).exec((err, tag) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json(tag);
  });
}

exports.remove = (req, res) => {
  const slug = req.params.slug.toLowerCase();
  TagModel.findOneAndRemove({slug}).exec((err, data) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    }
    res.json({
      message: 'tag removed.'
    });
  });
}
