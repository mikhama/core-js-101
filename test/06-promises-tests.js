const assert = require('assert');
const tasks = require('../src/06-promises-tasks');
it.optional = require('../extensions/it-optional');

describe('07-promises-tasks', () => {
  it.optional('function willYouMarryMe should return correct Promise object', (done) => {
    const answer1 = tasks.willYouMarryMe(true);
    const answer2 = tasks.willYouMarryMe(false);
    const answers = [
      tasks.willYouMarryMe(),
      tasks.willYouMarryMe(null),
      tasks.willYouMarryMe(NaN),
      tasks.willYouMarryMe(''),
      tasks.willYouMarryMe(1),
      tasks.willYouMarryMe('Yes'),
      tasks.willYouMarryMe({}),
    ];

    const messages = [];
    const defaultRejectionMessage = new Error('Promise should be rejected with an Error!');

    assert(
      answer1 instanceof Promise && answer2 instanceof Promise,
      'willYouMarryMe should return Promise!',
    );

    // answer 1
    answer1.then((value) => {
      assert.equal(
        value,
        'Hooray!!! She said "Yes"!',
        'if parameter is "true" Promise should be resolved with value === \'Hooray!!! She said "Yes"!\'',
      );
    }).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
      messages.push(errorMessage.message);

      // answer 2
    }).then(() => answer2).then((value) => {
      assert.equal(
        value,
        'Oh no, she said "No".',
        'if parameter is "false" Promise should be resolved with value === \'Oh no, she said "No".\'',
      );
    })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      // answers
      .then(() => Promise.all(answers))
      .then(() => {
        assert(
          false,
          'if parameter is not boolean Promise should be rejected with Error(\'Wrong parameter is passed! Ask her again.\')',
        );
      })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;

        assert.equal(
          errorMessage.message,
          'Wrong parameter is passed! Ask her again.',
          'if parameter is not boolean Promise should be rejected with Error(\'Wrong parameter is passed! Ask her again.\')',
        );
      })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      .finally(() => {
        if (messages.length > 0) {
          done(Error(`\t${messages.join(';\n\t\t')}`));
        } else {
          done();
        }
      });
  }, true);

  it.optional('function processAllPromises should return correct Promise that will be resolved with array of values', (done) => {
    const arrayForPromise = new Array(1000).fill(0).map((_, idx) => idx);
    const result1 = tasks.processAllPromises(arrayForPromise.map((item) => Promise.resolve(item)));
    const result2 = tasks.processAllPromises(arrayForPromise.map((item) => (item % 2
      ? Promise.resolve(item)
      : Promise.reject(Error(`Predictable Rejection ${item}`)))));

    const messages = [];
    const defaultRejectionMessage = 'Incorrect data!';

    assert(
      result1 instanceof Promise && result2 instanceof Promise,
      'processAllPromises should return Promise!',
    );

    // result 1
    result1.then((array) => {
      array.forEach((item, idx) => {
        assert.equal(
          item,
          arrayForPromise[idx],
          'array\'s items shouldn\'t be Promises objects!',
        );
      });
    }).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
      messages.push(errorMessage.message);
    // result 2
    }).then(() => result2).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;

      assert.equal(
        errorMessage.message,
        'Predictable Rejection 0',
        'should reject with Error was given from the first rejected Promise in array!',
      );
    })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      .finally(() => {
        if (messages.length > 0) {
          done(Error(`\t${messages.join(';\n\t\t')}`));
        } else {
          done();
        }
      });
  }, true);

  it.optional('function getFastestPromise should return correct Promise that will be resolved with value of first resolved Promise', (done) => {
    const promises1 = [
      new Promise((resolve) => setTimeout(() => resolve('I\'m second!'), 500)),
      Promise.resolve('I\'m first!'),
    ];
    const promises2 = [
      new Promise((_, reject) => setTimeout(() => '', reject(Error('I\'m not second!')), 200)),
      new Promise((_, reject) => setTimeout(() => '', reject(Error('I\'m not first!')), 500)),
    ];

    const result1 = tasks.getFastestPromise(promises1);
    const result2 = tasks.getFastestPromise(promises2);

    const messages = [];
    const defaultRejectionMessage = 'Incorrect data!';

    assert(
      result1 instanceof Promise && result2 instanceof Promise,
      'getFastestPromise should return Promise!',
    );

    // result 1
    result1.then((value) => {
      assert.equal(
        value,
        'I\'m first!',
        'getFastestPromise should return Promise that was resolved first!',
      );
    }).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
      messages.push(errorMessage.message);
      // result 2
    }).then(() => result2).then(() => {
      assert(
        false,
        'should reject with Error was given from the first rejected Promise in array!',
      );
    })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        assert.equal(
          errorMessage.message,
          'I\'m not second!',
          'should reject with Error was given from the first rejected Promise in array!',
        );
      })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      .finally(() => {
        if (messages.length > 0) {
          done(Error(`\t${messages.join(';\n\t\t')}`));
        } else {
          done();
        }
      });
  }, true);

  it.optional('function chainPromises should resolve Promises one by one', (done) => {
    const lorem = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
    const arrayForPromise = new Array(1000).fill(0).map((_, idx) => idx);

    const promises = lorem.split(' ').map((item) => new Promise((resolve) => resolve(item)));

    const result1 = tasks.chainPromises(promises, (a, b) => `${a} ${b}`);
    let result2;

    const unhandled = new Promise((resolve, reject) => {
      process.on('unhandledRejection', (err) => {
        global.console.error(err);
        reject(Error('there are should not be any Unhandled Rejections!'));
      });
      result2 = tasks.chainPromises(arrayForPromise.map((item) => (item % 2
        ? Promise.resolve(item)
        : Promise.reject(Error(`Predictable Rejection ${item}`)))),
      (a, b) => a - b);
      result2.then(() => resolve());
    });

    const messages = [];
    const defaultRejectionMessage = 'Incorrect data!';

    assert(
      !/(Promise.all\s*\({0,})/.test(tasks.chainPromises.toString()),
      'Function "chainPromises" should not use Promise.all method!',
    );

    assert(
      result1 instanceof Promise && result2 instanceof Promise,
      'chainPromises should return Promise!',
    );

    // result 1
    result1.then((value) => {
      assert.equal(
        value instanceof Promise,
        false,
        'result value shouldn\'t be Promise object!',
      );
      assert.equal(
        Array.isArray(value),
        false,
        'result value shouldn\'t be Array!',
      );
      assert.equal(
        value,
        lorem,
        'result value should be equal value that could be calculated by reducing array with method action!',
      );
    }).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
      messages.push(errorMessage.message);
      // result 2
    }).then(() => result2).catch((error) => {
      const errorMessage = error instanceof Error ? error : defaultRejectionMessage;

      assert(
        errorMessage.message.match('Predictable Rejection'),
        'should not reject with Errors!',
      );
    })
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      .then(() => unhandled)
      .catch((error) => {
        const errorMessage = error instanceof Error ? error : defaultRejectionMessage;
        messages.push(errorMessage.message);
      })
      .finally(() => {
        if (messages.length > 0) {
          done(Error(`\t${messages.join(';\n\t\t')}`));
        } else {
          done();
        }
      });
  }, true);
});
