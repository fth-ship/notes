(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process){
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

}).call(this,require('_process'))
},{"_process":2}],2:[function(require,module,exports){
// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined'
    && window.setImmediate;
    var canMutationObserver = typeof window !== 'undefined'
    && window.MutationObserver;
    var canPost = typeof window !== 'undefined'
    && window.postMessage && window.addEventListener
    ;

    if (canSetImmediate) {
        return function (f) { return window.setImmediate(f) };
    }

    var queue = [];

    if (canMutationObserver) {
        var hiddenDiv = document.createElement("div");
        var observer = new MutationObserver(function () {
            var queueList = queue.slice();
            queue.length = 0;
            queueList.forEach(function (fn) {
                fn();
            });
        });

        observer.observe(hiddenDiv, { attributes: true });

        return function nextTick(fn) {
            if (!queue.length) {
                hiddenDiv.setAttribute('yes', 'no');
            }
            queue.push(fn);
        };
    }

    if (canPost) {
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}]},{},[1]);
