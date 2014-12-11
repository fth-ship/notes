var fizzbuzz = require('./fizzbuzz');

function printFizz(n) {
  if (fizzbuzz.isFizz(n)) {
    console.log('Fizz');
  }
}

function printBuzz(n) {
  if (fizzbuzz.isBuzz(n)) {
    console.log('Buzz');
  }
}

function printFizzBuzz(n) {
  if (fizzbuzz.isFizzBuzz(n)) {
    console.log('FizzBuzz');
  }
}

function printNumber(n) {
  if (fizzbuzz.isNumber(n)) {
    console.log(n);
  }
}

for (var i = 1, l = 100; i <= l; i += 1) {
  printFizzBuzz(i);
  printFizz(i);
  printBuzz(i);
  printNumber(i);
}
