(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var fizzbuzz = require('./fizzbuzz');

function printFizzBuzz(n) {
  if (fizzbuzz.isFizzBuzz(n)) {
    console.log('FizzBuzz');
  }
}

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

},{"./fizzbuzz":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
