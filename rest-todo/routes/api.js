var express = require('express');
var router = express.Router();
var middlewares = require('../middlewares');
var controllers = require('../controllers');

router.get('/', middlewares.apiIndex, controllers.apiIndex);

module.exports = router;
