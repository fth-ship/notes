function debug(message) {
  if (process.env.DEBUG_CODE === 'context') {
    console.log(message);
  } 
}

function isFizz(n) {
  debug('is fizz ' + n);
  return n % 3 === 0;
}

function isBuzz(n) {
  debug('is buzz ' + n);
  return n % 5 === 0;
}

function isFizzBuzz(n) {
  debug('is fizz buzz ' + n);
  return isFizz(n) && isBuzz(n);
}

function isNotFizz(n) {
  debug('is not fizz ' + n);
  return !isFizz(n);
}

function isNotBuzz(n) {
  debug('is not buzz ' + n);
  return !isBuzz(n);
}

function isNotFizzBuzz(n) {
  debug('is not fizz buzz ' + n);
  return !isFizzBuzz(n);
}

function printFizzBuzz(n) {
  debug('print fizz buzz ' + n);
  if (isFizzBuzz(n)) {
    console.log('FizzBuzz');
  }
}

function printFizz(n) {
  debug('print fizz ' + n);
  if (isFizz(n)) {
    console.log('Fizz');
  }
}

function printBuzz(n) {
  debug('print buzz ' + n);
  if (isBuzz(n)) {
    console.log('Buzz');
  }
}

function printNumber(n) {
  debug('print number ' + n);
  if (isNotFizzBuzz(n) && isNotFizz(n) && isNotBuzz(n)) {
    console.log(n);
  }
}

for (var i = 1, l = 101; i < l; i += 1) {
  printFizzBuzz(i);
  printFizz(i);
  printBuzz(i);
  printNumber(i);
}
