var should = require('should');
var fizzbuzz = require('./fizzbuzz');

describe('FizzBuzz', function () {
  it('should be fizz', function () {
    fizzbuzz.isFizz(3).should.be.ok;
  });

  it('should be buzz', function () {
    fizzbuzz.isBuzz(5).should.be.ok;
  });

  it('should be fizzBuzz', function () {
    fizzbuzz.isFizzBuzz(15).should.be.ok;
  });

  it('should be a number', function () {
    fizzbuzz.isNumber(2).should.be.ok;
  });
});
