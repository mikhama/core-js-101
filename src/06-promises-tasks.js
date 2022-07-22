/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise       *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Return Promise object that is resolved with string value === 'Hooray!!! She said "Yes"!',
 * if boolean value === true is passed, resolved with string value === 'Oh no, she said "No".',
 * if boolean value === false is passed, and rejected
 * with error message === 'Wrong parameter is passed! Ask her again.',
 * if is not boolean value passed
 *
 * @param {boolean} isPositiveAnswer
 * @return {Promise}
 *
 * @example
 *    const p1 = willYouMarryMe(true);
 *    p1.then(answer => console.log(answer)) // 'Hooray!!! She said "Yes"!'
 *
 *    const p2 = willYouMarryMe(false);
 *    p2.then(answer => console.log(answer)) // 'Oh no, she said "No".';
 *
 *    const p3 = willYouMarryMe();
 *    p3.then(answer => console.log(answer))
 *      .catch((error) => console.log(error.message)) // 'Error: Wrong parameter is passed!
 *                                                    //  Ask her again.';
 */
async function willYouMarryMe(isPositiveAnswer) {
  const yesAnsw = 'Hooray!!! She said "Yes"!';
  const noAnsw = 'Oh no, she said "No".';
  const errr = new Error('Wrong parameter is passed! Ask her again.');
  if (isPositiveAnswer === true) {
    return new Promise((res) => res(yesAnsw));
  // eslint-disable-next-line no-else-return
  } else if (isPositiveAnswer === false) {
    return new Promise((res) => res(noAnsw));
  } else {
    return new Promise((res, req) => req(errr));
  }
}


/**
 * Return Promise object that should be resolved with array containing plain values.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(3), Promise.resolve(12)]
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [1, 2, 3]
 *    })
 *
 */
function processAllPromises(array) {
  // throw new Error('Not implemented');
  return Promise.all(array);
}

/**
 * Return Promise object that should be resolved with value received from
 * Promise object that will be resolved first.
 * Function receive an array of Promise objects.
 *
 * @param {Promise[]} array
 * @return {Promise}
 *
 * @example
 *    const promises = [
 *      Promise.resolve('first'),
 *      new Promise(resolve => setTimeout(() => resolve('second'), 500)),
 *    ];
 *    const p = processAllPromises(promises);
 *    p.then((res) => {
 *      console.log(res) // => [first]
 *    })
 *
 */
function getFastestPromise(array) {
  // throw new Error('Not implemented');
  return Promise.race(array);
}

/**
 * Return Promise object that should be resolved with value that is
 * a result of action with values of all the promises that exists in array.
 * If some of promise is rejected you should catch it and process the next one.
 *
 * @param {Promise[]} array
 * @param {Function} action
 * @return {Promise}
 *
 * @example
 *    const promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)];
 *    const p = chainPromises(promises, (a, b) => a + b);
 *    p.then((res) => {
 *      console.log(res) // => 6
 *    });
 *
 */
function chainPromises(/* array, action */) {
  throw new Error('Not implemented');
  // async function writePromiseDateToArr(arr, num) {
  //   const results = [];
  //   if (arr.length - 1 === num) {
  //     const numb = await arr[num];
  //     results.push(numb);
  //     return results;
  //   }
  //   const numb = await arr[num];
  //   results.push(numb);
  //   return writePromiseDateToArr(arr, num + 1);
  // }
  // try {
  //   const sss = await writePromiseDateToArr(array, 0);
  //   const sumRes = sss.reduce(action);
  //   return new Promise((res) => res(sumRes));
  // } catch (error) {
  //   console.error(error);
  // }
}
module.exports = {
  willYouMarryMe,
  processAllPromises,
  getFastestPromise,
  chainPromises,
};
