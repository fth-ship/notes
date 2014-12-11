var assert = require('assert');
var fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', function () {
  it('should be fizz', function () {
    assert(fizzbuzz.isFizz(3), 'Not is fizz');
  });

  it('should be buzz', function () {
    assert(fizzbuzz.isBuzz(5), 'Not is buzz');
  });

  it('should be fizzbuzz', function () {
    assert(fizzbuzz.isFizzBuzz(15), 'Not is fizzbuzz');
  });

  it('should be number', function () {
    assert(fizzbuzz.isNumber(2), 'Not is number');
  });
});
