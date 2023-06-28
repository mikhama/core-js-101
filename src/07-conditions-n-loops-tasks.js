/* *************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 ************************************************************************************************ */


/**
* Возвращает «Fizz», «Buzz» или исходный номер, используя следующие правила:
 * 1) вернуть исходный номер
 * 2) но если числовые кратные из трех возврата 'Fizz'
 * 3) Для множества пяти возврата «гул»
 * 4) Для чисел, которые являются кратными как трех, так и пяти возвратов 'fizzbuzz'
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
function getFizzBuzz(num) {
  // throw new Error('Not implemented');
  if (num % 3 === 0 && num % 5 === 0) {
    return 'FizzBuzz';
  }
  if (num % 3 === 0) {
    return 'Fizz';
  }
  if (num % 5 === 0) {
    return 'Buzz';
  }
  return num;
}


/**
* Возвращает фактор указанного целого числа.
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
  if (n === 0 || n === 1) {
    return 1;
  }

  let factorial = 1;
  for (let i = 2; i <= n; i += 1) {
    factorial *= i;
  }

  return factorial;
}


/**
 * Возвращает сумму целых чисел между N1 и N2 (включительно).
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
  let sum = 0;

  for (let i = n1; i <= n2; i += 1) {
    sum += i;
  }

  return sum;
}


/**
* Возвращает True, если треугольник может быть построен с указанными сторонами A, B, C
 * и ложь любыми другими способами.
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
  return a + b > c && a + c > b && b + c > a;
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
  // Рассчитайте координаты сторон каждого прямоугольника
  const rect1Left = rect1.left;
  const rect1Right = rect1.left + rect1.width;
  const rect1Top = rect1.top;
  const rect1Bottom = rect1.top + rect1.height;
  const rect2Left = rect2.left;
  const rect2Right = rect2.left + rect2.width;
  const rect2Top = rect2.top;
  const rect2Bottom = rect2.top + rect2.height;
  // Проверьте, перекрываются ли прямоугольникиугольники
  if (
    rect1Left < rect2Right
    && rect1Right > rect2Left
    && rect1Top < rect2Bottom
    && rect1Bottom > rect2Top
  ) {
    return true;
  }
  return false;
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
  const distance = Math.sqrt(
    ((point.x - circle.center.x) ** 2) + ((point.y - circle.center.y) ** 2),
  );
  return distance < circle.radius;
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
function findFirstSingleChar(str) {
  // throw new Error('Not implemented');
  const charCount = {};
  // Count the occurrences of each character
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      charCount[char] = 1;
    }
  }
  // Find the first character with count 1
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char;
    }
  }
  // No single character found
  return null;
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
  const startBracket = isStartIncluded ? '[' : '(';
  const endBracket = isEndIncluded ? ']' : ')';
  const smallerNumber = Math.min(a, b);
  const largerNumber = Math.max(a, b);
  return `${startBracket}${smallerNumber}, ${largerNumber}${endBracket}`;
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
  const reversedString = String(num).split('').reverse().join('');
  return parseInt(reversedString, 10);
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
 *   79927398713      => true
 *   4012888888881881 => true
 *   5123456789012346 => true
 *   378282246310005  => true
 *   371449635398431  => true
 *
 *   4571234567890111 => false
 *   5436468789016589 => false
 *   4916123456789012 => false
 */
function isCreditCardNumber(ccn) {
  // throw new Error('Not implemented');
  const digits = String(ccn).split('').map(Number);
  let sum = 0;
  let isEven = false;
  for (let i = digits.length - 1; i >= 0; i -= 1) {
    let digit = digits[i];

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }
  return sum % 10 === 0;
}

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
  if (num <= 9) {
    return num;
  }

  let sum = 0;
  let remainingNum = num;
  while (remainingNum > 0) {
    sum += remainingNum % 10;
    remainingNum = Math.floor(remainingNum / 10);
  }

  return getDigitalRoot(sum);
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
  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (char === '[' || char === '(' || char === '{' || char === '<') {
      stack.push(char);
    } else if (char === ']' || char === ')' || char === '}' || char === '>') {
      if (stack.length === 0) {
        return false;
      }

      const top = stack.pop();
      if (
        (char === ']' && top !== '[')
        || (char === ')' && top !== '(')
        || (char === '}' && top !== '{')
        || (char === '>' && top !== '<')
      ) {
        return false;
      }
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
  let numCopy = num;
  let naryString = '';

  while (numCopy > 0) {
    const remainder = numCopy % n;
    naryString += remainder.toString();
    numCopy = Math.floor(numCopy / n);
  }

  return naryString.split('').reverse().join('');
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
  const arr = pathes.map((p) => p.split('/'));
  const parts = [];
  for (let i = 0; i < arr[0].length; i += 1) {
    const comp = arr[0][i];
    if (arr.every((p) => p[i] === comp)) {
      parts.push(comp);
    } else {
      break;
    }
  }
  const res = parts.join('/');
  if (parts.length === 0) return '';
  return `${res}/`;
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
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const cols2 = m2[0].length;

  const result = new Array(rows1);

  for (let i = 0; i < rows1; i += 1) {
    result[i] = new Array(cols2);

    for (let j = 0; j < cols2; j += 1) {
      let sum = 0;

      for (let k = 0; k < cols1; k += 1) {
        sum += m1[i][k] * m2[k][j];
      }

      result[i][j] = sum;
    }
  }

  return result;
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
  // Check rows
  for (let i = 0; i < 3; i += 1) {
    if (position[i][0] && position[i][0] === position[i][1] && position[i][1] === position[i][2]) {
      return position[i][0];
    }
  }

  // Check columns
  for (let j = 0; j < 3; j += 1) {
    if (position[0][j] && position[0][j] === position[1][j] && position[1][j] === position[2][j]) {
      return position[0][j];
    }
  }

  // Check diagonals
  if (position[0][0] && position[0][0] === position[1][1] && position[1][1] === position[2][2]) {
    return position[0][0];
  }

  if (position[0][2] && position[0][2] === position[1][1] && position[1][1] === position[2][0]) {
    return position[0][2];
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
