var assert = require('assert');
var fizzbuzz = require('./fizzbuzz');

describe('Fizzbuzz', function () {
  it('should be is fizz', function () {
    assert(fizzbuzz.isFizz(3), 'Not is fizz');
  });

  it('should be is buzz', function () {
    assert(fizzbuzz.isBuzz(5), 'Not is buzz');
  });

  it('should be is fizz buzz', function () {
    assert(fizzbuzz.isFizzBuzz(15), 'Not is fizz buzz');
  });

  it('should be is not fizz buzz', function () {
    assert(fizzbuzz.isNotFizzBuzz(2), 'Not is fizz buzz');
  });

  it('should be is not fizz', function () {
    assert(fizzbuzz.isNotFizz(2), 'Not is fizz');
  });

  it('should be is not buzz', function () {
    assert(fizzbuzz.isNotBuzz(2), 'Not is buzz');
  });

  it('should be is number', function () {
    assert(fizzbuzz.isNumber(2), 'Not is number');
  });
});
