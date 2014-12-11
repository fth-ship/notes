// fizzbuzz.js
function isFizzHandler(n) {
  return n % 3 === 0;
}
exports.isFizz = isFizzHandler;

function isBuzzHandler(n) {
  return n % 5 === 0;
}
exports.isBuzz = isBuzzHandler;

function isFizzBuzzHandler(n) {
  return isFizzHandler(n) && isBuzzHandler(n);
}
exports.isFizzBuzz = isFizzBuzzHandler;

function isNumberHandler(n) {
  return !isFizzBuzzHandler(n) &&
         !isFizzHandler(n) &&
         !isBuzzHandler(n);
}
exports.isNumber = isNumberHandler;
