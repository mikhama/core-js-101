const assert = require('assert');
const tasks = require('../src/08-functions-n-closures-tasks');
it.optional = require('../extensions/it-optional');

describe('09-functions-n-closures-tasks', () => {
  it.optional('getComposition should return the composition of two functions', () => {
    [
      {
        f: Math.sin, g: Math.asin, arg: 0, result: 0,
      },
      {
        f: (x) => x + 1, g: (x) => x + 1, arg: 1, result: 3,
      },
      {
        f: (x) => x * x, g: (x) => x + 2, arg: 5, result: 49,
      },
    ].forEach((data) => {
      const actual = tasks.getComposition(data.f, data.g);
      assert(
        actual(data.arg) === data.result,
      );
    });
  });


  it.optional('getPowerFunction should return the math power function using the specified exponent', () => {
    const power2 = tasks.getPowerFunction(2);
    for (let i = 0; i < 10; i += 1) {
      assert.equal(power2(i), i ** 2);
    }

    const power05 = tasks.getPowerFunction(0.5);
    for (let i = 0; i < 10; i += 1) {
      assert.equal(power05(i), i ** 0.5);
    }
  });


  it.optional('getPolynom should return the polynom with specified coefficients', () => {
    [
      {
        polynom: tasks.getPolynom(2, 3, 5),
        results: [{ x: 0, y: 5 }, { x: 2, y: 19 }, { x: 3, y: 32 }],
      }, {
        polynom: tasks.getPolynom(1, -3),
        results: [{ x: 0, y: -3 }, { x: 2, y: -1 }, { x: 5, y: 2 }],
      }, {
        polynom: tasks.getPolynom(8),
        results: [{ x: 0, y: 8 }, { x: 2, y: 8 }, { x: 5, y: 8 }],
      },
    ].forEach((data) => {
      data.results.forEach((test) => {
        assert(
          test.y === data.polynom(test.x),
        );
      });
    });
  });


  it.optional('memoize method should cache the result of function', () => {
    let numberOfCalls = 0;
    const fn = () => {
      numberOfCalls += 1;
      return Math.random();
    };
    const memoizer = tasks.memoize(fn);
    const expected = memoizer();
    assert.equal(numberOfCalls, 1, 'memoize result should evaluate the specified function at first call');
    for (let i = 0; i < 10; i += 1) {
      const actual = memoizer();
      assert.equal(actual, expected, 'memoize result should return the cached value at second and next calls');
      assert.equal(numberOfCalls, 1, 'memoize result should not evaluate the specified function at second and next calls');
    }
  });


  it.optional('retry method should try to evaluate the specified function several times', () => {
    const maxAttemps = 3;
    const expected = 'expected';
    let attemps = 0;

    const fn = () => {
      attemps += 1;
      if (attemps < maxAttemps) throw new Error();
      return expected;
    };

    const actual = tasks.retry(fn, maxAttemps)();
    assert.equal(actual, expected);
  });


  it.optional('logger method should log start and end of call of the standard js function', () => {
    let log = '';
    const logFunc = (text) => {
      log += `${text}\n`;
      return log;
    };
    const cosLogger = tasks.logger(Math.cos, logFunc);

    const actual = cosLogger(Math.PI);

    assert.equal(actual, -1, 'logger function should return the original result from specified function');
    assert.equal(
      log,
      'cos(3.141592653589793) starts\n'
           + 'cos(3.141592653589793) ends\n',
      'logger function shoud log the start and end of the specified function',
    );
  });


  it.optional('logger method should log start and end of call of the specified function', () => {
    let isCalling = false;
    let log = '';

    const fn = function testLogger(param, index) {
      assert.equal(
        log,
        'testLogger(["expected","test",1],0) starts\n',
        'logger function shoud log the start of specified function before calling',
      );
      isCalling = true;
      return param[index];
    };

    const logFunc = (text) => {
      log += `${text}\n`;
      return log;
    };
    const logger = tasks.logger(fn, logFunc);

    const actual = logger(['expected', 'test', 1], 0);

    assert.equal(isCalling, true, 'logger function should call the specified function');
    assert.equal(actual, 'expected', 'logger function should return the original result from specified function');
    assert.equal(
      log,
      'testLogger(["expected","test",1],0) starts\n'
      + 'testLogger(["expected","test",1],0) ends\n',
      'logger function shoud log the end of specified function after calling',
    );
  });


  it.optional('partialUsingArguments should return the function with partial applied arguments', () => {
    const fn = (x1, x2, x3, x4) => x1 + x2 + x3 + x4;
    assert.equal(
      tasks.partialUsingArguments(fn, 'a')('b', 'c', 'd'),
      'abcd',
      "partialUsingArguments(fn, 'a')('b','c','d')' should return 'abcd'",
    );
    assert.equal(
      tasks.partialUsingArguments(fn, 'a', 'b')('c', 'd'),
      'abcd',
      "partialUsingArguments(fn, 'a','b')('c','d')' should return 'abcd'",
    );
    assert.equal(
      tasks.partialUsingArguments(fn, 'a', 'b', 'c')('d'),
      'abcd',
      "partialUsingArguments(fn, 'a','b','c')('d') should return 'abcd'",
    );
    assert.equal(
      tasks.partialUsingArguments(fn, 'a', 'b', 'c', 'd')(),
      'abcd',
      "partialUsingArguments(fn, 'a','b','c','d')()' should return 'abcd'",
    );
  });


  it.optional('getIdGeneratorFunction should return the id generator function', () => {
    const f0 = tasks.getIdGeneratorFunction(0);
    for (let i = 0; i < 1000; i += 1) {
      assert.equal(f0(), i);
    }

    const f10 = tasks.getIdGeneratorFunction(10);
    const f20 = tasks.getIdGeneratorFunction(20);
    for (let i = 0; i < 1000; i += 1) {
      assert.equal(f10(), 10 + i);
      assert.equal(f20(), 20 + i);
    }
  });
});
