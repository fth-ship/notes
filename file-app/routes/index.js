var express = require('express');
var router = express.Router();
var uniq = require('./stream');
var fs = require('fs');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res) {
  fs
    .createReadStream(path.resolve(__dirname, './numbers.txt'))
    .pipe(uniq)
    .pipe(res);
});

module.exports = router;
