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

function isNotFizzBuzzHandler(n) {
  return !isFizzBuzzHandler(n);
}
exports.isNotFizzBuzz = isNotFizzBuzzHandler;

function isNotFizzHandler(n) {
  return !isFizzHandler(n);
}
exports.isNotFizz = isNotFizzHandler;

function isNotBuzzHandler(n) {
  return !isBuzzHandler(n);
}
exports.isNotBuzz = isNotBuzzHandler;

function isNumberHandler(n) {
  return isNotFizzBuzzHandler(n) &&
         isNotFizzHandler(n) &&
         isNotBuzzHandler(n);
}
exports.isNumber = isNumberHandler;
