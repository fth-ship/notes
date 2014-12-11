var util = require('util');

function sendEmail(obj, callback) {
  console.log('send email');
  console.log(util.inspect(obj));
  callback(null, true);
}
module.exports = sendEmail;
