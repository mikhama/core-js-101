/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the 'Fizz','Buzz' or an original number using the following rules:
 * 1) return original number
 * 2) but if number multiples of three return 'Fizz'
 * 3) for the multiples of five return 'Buzz'
 * 4) for numbers which are multiples of both three and five return 'FizzBuzz'
 *
 * @param {number} num
 * @return {any}
 *
 * @example
 *   2 =>  2
 *   3 => 'Fizz'
 *   5 => 'Buzz'
 *   4 => 4
 *  15 => 'FizzBuzz'
 *  20 => 'Buzz'
 *  21 => 'Fizz'
 *
 */
// eslint-disable-next-line consistent-return
function getFizzBuzz(num) {
  // throw new Error('Not implemented');
  for (let i = num; i < 101; i += 1) {
    if (i % 15 === 0) return 'FizzBuzz';
    if (i % 3 === 0) return 'Fizz';
    if (i % 5 === 0) return 'Buzz';
    return i;
  }
}
/**
 * Returns the factorial of the specified integer n.
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   1  => 1
 *   5  => 120
 *   10 => 3628800
 */
function getFactorial(n) {
  // throw new Error('Not implemented');
  if (n === 1) return 1;
  if (n === 2) return 2;
  return n * getFactorial(n - 1);
}


/**
 * Returns the sum of integer numbers between n1 and n2 (inclusive).
 *
 * @param {number} n1
 * @param {number} n2
 * @return {number}
 *
 * @example:
 *   1,2   =>  3  ( = 1+2 )
 *   5,10  =>  45 ( = 5+6+7+8+9+10 )
 *   -1,1  =>  0  ( = -1 + 0 + 1 )
 */
function getSumBetweenNumbers(n1, n2) {
  // throw new Error('Not implemented');
  let count = 0;
  for (let i = n1; i <= n2; i += 1) {
    count += i;
  }
  return count;
}


/**
 * Returns true, if a triangle can be built with the specified sides a, b, c
 * and false in any other ways.
 *
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {bool}
 *
 * @example:
 *   1,2,3    =>  false
 *   3,4,5    =>  true
 *   10,1,1   =>  false
 *   10,10,10 =>  true
 */
function isTriangle(a, b, c) {
  // throw new Error('Not implemented');
  if (a === b && a === c) return true;
  if (a === 0 || b === 0 || c === 0) return false;
  if ((a ** 2) + (b ** 2) === (c ** 2)) return true;
  if (a + b > c && a + c > b && b + c > a) return true;
  return false;
}

/**
 * Returns true, if two specified axis-aligned rectangles overlap, otherwise false.
 * Each rectangle representing by object
 *  {
 *     top: 5,
 *     left: 5,
 *     width: 20,
 *     height: 10
 *  }
 *
 *  (5;5)
 *     -------------
 *     |           |
 *     |           |  height = 10
 *     -------------
 *        width=20
 *
 * NOTE: Please use canvas coordinate space (https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#The_grid),
 * it differs from Cartesian coordinate system.
 *
 * @param {object} rect1
 * @param {object} rect2
 * @return {bool}
 *
 * @example:
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top: 5, left: 5, width: 20, height: 20 }    =>  true
 *
 *   { top: 0, left: 0, width: 10, height: 10 },
 *   { top:20, left:20, width: 20, height: 20 }    =>  false
 *
 */
function doRectanglesOverlap(rect1, rect2) {
  // throw new Error('Not implemented');
  const x = +rect1.top + +rect1.height >= +rect2.top;
  const y = rect1.left + rect1.width >= rect2.left;
  return x && y;
}


/**
 * Returns true, if point lies inside the circle, otherwise false.
 * Circle is an object of
 *  {
 *     center: {
 *       x: 5,
 *       y: 5
 *     },
 *     radius: 20
 *  }
 *
 * Point is object of
 *  {
 *     x: 5,
 *     y: 5
 *  }
 *
 * @param {object} circle
 * @param {object} point
 * @return {bool}
 *
 * @example:
 *   { center: { x:0, y:0 }, radius:10 },  { x:0, y:0 }     => true
 *   { center: { x:0, y:0 }, radius:10 },  { x:10, y:10 }   => false
 *
 */
function isInsideCircle(circle, point) {
  // throw new Error('Not implemented');
  const xx = Math.abs(+circle.center.x - +point.x);
  const yy = Math.abs(+circle.center.y - +point.y);
  return circle.radius > Math.sqrt(xx ** 2 + yy ** 2);
}

/**
 * Returns the first non repeated char in the specified strings otherwise returns null.
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 *   'The quick brown fox jumps over the lazy dog' => 'T'
 *   'abracadabra'  => 'c'
 *   'entente' => null
 */
// eslint-disable-next-line consistent-return
function findFirstSingleChar(str) {
  // throw new Error('Not implemented');
  const arr = [...new Set(str.split(''))];
  for (let i = 0; i < arr.length; i += 1) {
    let count = 0;
    for (let j = 0; j < str.length; j += 1) {
      if (arr[i] === str[j]) {
        count += 1;
      }
    }
    if (count === 1) {
      return arr[i];
    }
  }
}


/**
 * Returns the string representation of math interval,
 * specified by two points and include / exclude flags.
 * See the details: https://en.wikipedia.org/wiki/Interval_(mathematics)
 *
 * Please take attention, that the smaller number should be the first in the notation
 *
 * @param {number} a
 * @param {number} b
 * @param {bool} isStartIncluded
 * @param {bool} isEndIncluded
 * @return {string}
 *
 * @example
 *   0, 1, true, true   => '[0, 1]'
 *   0, 1, true, false  => '[0, 1)'
 *   0, 1, false, true  => '(0, 1]'
 *   0, 1, false, false => '(0, 1)'
 * Smaller number has to be first :
 *   5, 3, true, true   => '[3, 5]'
 *
 */
function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
  // throw new Error('Not implemented');
  const leftQuote = isStartIncluded === true ? '[' : '(';
  const rightQuote = isEndIncluded === true ? ']' : ')';
  const result = a > b ? `${leftQuote}${b}, ${a}${rightQuote}` : `${leftQuote}${a}, ${b}${rightQuote}`;
  return result;
}


/**
 * Reverse the specified string (put all chars in reverse order)
 *
 * @param {string} str
 * @return {string}
 *
 * @example:
 * 'The quick brown fox jumps over the lazy dog' => 'god yzal eht revo spmuj xof nworb kciuq ehT'
 * 'abracadabra' => 'arbadacarba'
 * 'rotator' => 'rotator'
 * 'noon' => 'noon'
 */
function reverseString(str) {
  // throw new Error('Not implemented');
  return str.split('').reverse().join('');
}


/**
 * Reverse the specified integer number (put all digits in reverse order)
 *
 * @param {number} num
 * @return {number}
 *
 * @example:
 *   12345 => 54321
 *   1111  => 1111
 *   87354 => 45378
 *   34143 => 34143
 */
function reverseInteger(num) {
  // throw new Error('Not implemented');
  return +num.toString().split('').reverse().join('');
}


/**
 * Validates the CCN (credit card number) and return true if CCN is valid
 * and false otherwise.
 *
 * See algorithm here : https://en.wikipedia.org/wiki/Luhn_algorithm
 *
 * @param {number} cnn
 * @return {boolean}
 *
 * @example:
 *   7992 7398 713      => true
 *   4012 8888 8888 1881 => true
 *   5123 4567 8901 2346 => true
 *   3782 8224 6310 005  => true
 *   3714 4963 5398 431  => true
 *
 *   4571 2345 6789 0111 => false
 *   5436 4687 8901 6589 => false
 *   4916 1234 5678 9012 => false
 */
function isCreditCardNumber(ccn) {
  // throw new Error('Not implemented');
  let nCheck = 0;
  let bEven = false;

  const numbers = ccn.toString().split('').reverse();
  numbers.forEach((item) => {
    let num = +item;
    if (bEven) {
      num *= 2;
      if (num > 9) num -= 9;
    }
    nCheck += num;
    bEven = !bEven;
  });
  return (nCheck % 10) === 0;
}
// console.log(isCreditCardNumber(4916123456789012));
/**
 * Returns the digital root of integer:
 *   step1 : find sum of all digits
 *   step2 : if sum > 9 then goto step1 otherwise return the sum
 *
 * @param {number} n
 * @return {number}
 *
 * @example:
 *   12345 ( 1+2+3+4+5 = 15, 1+5 = 6) => 6
 *   23456 ( 2+3+4+5+6 = 20, 2+0 = 2) => 2
 *   10000 ( 1+0+0+0+0 = 1 ) => 1
 *   165536 (1+6+5+5+3+6 = 26,  2+6 = 8) => 8
 */
function getDigitalRoot(num) {
  // throw new Error('Not implemented');
  const sum = +num.toString().split('').reduce((a, b) => +a + +b, 0);
  return sum > 9 ? getDigitalRoot(sum) : sum;
}


/**
 * Returns true if the specified string has the balanced brackets and false otherwise.
 * Balanced means that is, whether it consists entirely of pairs of opening/closing brackets
 * (in that order), none of which mis-nest.
 * Brackets include [],(),{},<>
 *
 * @param {string} str
 * @return {boolean}
 *
 * @example:
 *   '' => true
 *   '[]'  => true
 *   '{}'  => true
 *   '()   => true
 *   '[[]' => false
 *   ']['  => false
 *   '[[][][[]]]' => true
 *   '[[][]][' => false
 *   '{)' = false
 *   '{[(<{[]}>)]}' = true
 */
function isBracketsBalanced(str) {
  // throw new Error('Not implemented');
  if (str.length === 0) return true;
  const openBrackets = ['{', '(', '[', '<'];
  const closeBrackets = ['}', ')', ']', '>'];
  const stack = [];
  const arr = str.split('');
  // eslint-disable-next-line no-restricted-syntax
  for (let i = 0; i < arr.length; i += 1) {
    if (closeBrackets.includes(arr[i]) && stack.length === 0) return false;
    const closeInd = closeBrackets.indexOf(arr[i]);
    if (stack[stack.length - 1] === openBrackets[closeInd] && closeBrackets.includes(arr[i])) {
      stack.pop();
    } else if (openBrackets.includes(arr[i])) {
      stack.push(arr[i]);
    }
  }
  return stack.length === 0;
}

/**
 * Returns the string with n-ary (binary, ternary, etc, where n <= 10)
 * representation of specified number.
 * See more about
 * https://en.wikipedia.org/wiki/Binary_number
 * https://en.wikipedia.org/wiki/Ternary_numeral_system
 * https://en.wikipedia.org/wiki/Radix
 *
 * @param {number} num
 * @param {number} n, radix of the result
 * @return {string}
 *
 * @example:
 *   1024, 2  => '10000000000'
 *   6561, 3  => '100000000'
 *    365, 2  => '101101101'
 *    365, 3  => '111112'
 *    365, 4  => '11231'
 *    365, 10 => '365'
 */
function toNaryString(num, n) {
  // throw new Error('Not implemented');
  return num.toString(n);
}

/**
 * Returns the common directory path for specified array of full filenames.
 *
 * @param {array} pathes
 * @return {string}
 *
 * @example:
 *   ['/web/images/image1.png', '/web/images/image2.png']  => '/web/images/'
 *   ['/web/assets/style.css', '/web/scripts/app.js',  'home/setting.conf'] => ''
 *   ['/web/assets/style.css', '/.bin/mocha',  '/read.me'] => '/'
 *   ['/web/favicon.ico', '/web-scripts/dump', '/verbalizer/logs'] => '/'
 */
function getCommonDirectoryPath(pathes) {
  // throw new Error('Not implemented');
  let checker = pathes[0];
  for (let i = 1; i < pathes.length; i += 1) {
    for (let j = 0; j < checker.length; j += 1) {
      if (checker[j] !== pathes[i][j]) {
        checker = checker.substring(0, j);
      }
    }
  }
  return checker.substring(0, checker.lastIndexOf('/') + 1);
}

/**
 * Returns the product of two specified matrixes.
 * See details: https://en.wikipedia.org/wiki/Matrix_multiplication
 *
 * @param {array} m1
 * @param {array} m2
 * @return {array}
 *
 * @example:
 *   [[ 1, 0, 0 ],       [[ 1, 2, 3 ],           [[ 1, 2, 3 ],
 *    [ 0, 1, 0 ],   X    [ 4, 5, 6 ],     =>     [ 4, 5, 6 ],
 *    [ 0, 0, 1 ]]        [ 7, 8, 9 ]]            [ 7, 8, 9 ]]
 *
 *                        [[ 4 ],
 *   [[ 1, 2, 3]]    X     [ 5 ],          =>     [[ 32 ]]
 *                         [ 6 ]]
 *
 */
function getMatrixProduct(m1, m2) {
  // throw new Error('Not implemented');
  const res = [[], [], []];
  for (let i = 0; i < m1.length; i += 1) {
    for (let j = 0; j < m2.length; j += 1) {
      res[i][j] = 0;
      for (let k = 0; k < m1[i].length; k += 1) {
        res[i][j] += m1[i][k] * m2[k][j];
      }
      if (m2[i].length === 1) {
        return res.filter((item) => item.length !== 0);
      }
    }
  }
  return res;
}

/**
 * Returns the evaluation of the specified tic-tac-toe position.
 * See the details: https://en.wikipedia.org/wiki/Tic-tac-toe
 *
 * Position is provides as 3x3 array with the following values: 'X','0', undefined
 * Function should return who is winner in the current position according to the game rules.
 * The result can be: 'X','0',undefined
 *
 * @param {array} position
 * @return {string}
 *
 * @example
 *
 *   [[ 'X',   ,'0' ],
 *    [    ,'X','0' ],       =>  'X'
 *    [    ,   ,'X' ]]
 *
 *   [[ '0','0','0' ],
 *    [    ,'X',    ],       =>  '0'
 *    [ 'X',   ,'X' ]]
 *
 *   [[ '0','X','0' ],
 *    [    ,'X',    ],       =>  undefined
 *    [ 'X','0','X' ]]
 *
 *   [[    ,   ,    ],
 *    [    ,   ,    ],       =>  undefined
 *    [    ,   ,    ]]
 *
 */
function evaluateTicTacToePosition(position) {
  // throw new Error('Not implemented');
  const arr = [];
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (position[i][j] === 'X' || position[i][j] === '0') {
        arr.push(position[i][j]);
      } else {
        arr.push('');
      }
    }
  }

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i <= 7; i += 1) {
    const winCondition = winningConditions[i];
    const a = winCondition[0];
    const b = winCondition[1];
    const c = winCondition[2];
    if (arr[a] === 'X' && arr[b] === 'X' && arr[c] === 'X') {
      return 'X';
    } if (arr[a] === '0' && arr[b] === '0' && arr[c] === '0') {
      return '0';
    }
  }
  return undefined;
}

module.exports = {
  getFizzBuzz,
  getFactorial,
  getSumBetweenNumbers,
  isTriangle,
  doRectanglesOverlap,
  isInsideCircle,
  findFirstSingleChar,
  getIntervalString,
  reverseString,
  reverseInteger,
  isCreditCardNumber,
  getDigitalRoot,
  isBracketsBalanced,
  toNaryString,
  getCommonDirectoryPath,
  getMatrixProduct,
  evaluateTicTacToePosition,
};
