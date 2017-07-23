const Rules = require('../models/Rule');


/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};


exports.rules = (req, res) => {
  Rules.find({
    library: req.body.library
  }, function(err, docs) {
    if (!err) {
      res.json(docs);
    } else {
      res.json(err);
    }
  });
};