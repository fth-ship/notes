// file: middlewares/api-index.js - created at 2014-12-10, 08:26
function apiIndexHandler(req, res, next) {
  var pkg = require('../package');

  res.locals.out = { name: pkg.name, version: pkg.version  };

  next();
}
module.exports = exports = apiIndexHandler;
