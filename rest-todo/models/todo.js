// file: models/todo.js - created at 2014-12-10, 08:46
function todoHandler() {
  var mongoose = require('mongoose');
  var Schema = mongoose.Schema;
  var schema = null;
  var timestamp = require('../plugins/timestamp');

  schema = new Schema({
    name: { type: String, required: true },
    done: { type: Boolean, default: false }
  });
  schema.plugin(timestamp);

  return mongoose.model('Todo', schema);
}
module.exports = exports = todoHandler();
