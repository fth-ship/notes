var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var util = require('util');

emitter.on('send-email', function (e) {
  console.log('Email sended');
  console.log(util.inspect(e));
});

module.exports = emitter;
