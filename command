#!/usr/bin/env node
var uniq = require('./stream');
var fs = require('fs');

fs
  .createReadStream('./numbers.txt')
  .pipe(uniq)
  .pipe(process.stdout);
