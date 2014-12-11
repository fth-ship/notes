var stream = require('stream');
var input = stream.Transform({ objectMode: true });

function _transformHandler(chunk, enc, done) {
  var content = chunk.toString().split('');
  var out = [];

  function filterHandler(i) {
    if (out.indexOf(i) === -1) {
      out.push(i);
    }
  }
  content.filter(filterHandler);

  out = out.join('');

  done(null, out);
}
input._transform = _transformHandler;

module.exports = input;
