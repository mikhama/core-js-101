/* *******************************************************************************************
 *                                                                                           *
 * Plese read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  const names = value.substring(7, value.length - 1).split(' ');
  return `${names[0]} ${names[1]}`;
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  return value[0];
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  return value.trim();
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  let result = '';
  for (let i = 0; i < count; i += 1) {
    result += value;
  }
  return result;
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  const result = str.replace(value, '');
  return result;
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  return str.substring(1, str.length - 1);
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  return str.split(';');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  let result = '┌';
  for (let i = 1; i < width - 1; i += 1) {
    result += '─';
  }
  result += '┐\n';
  for (let i = 1; i < height - 1; i += 1) {
    let emptyStr = '│';
    for (let j = 1; j < width - 1; j += 1) {
      emptyStr += ' ';
    }
    emptyStr += '│\n';
    result += emptyStr;
  }
  result += '└';
  for (let i = 1; i < width - 1; i += 1) {
    result += '─';
  }
  result += '┘\n';

  return result;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  const input = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i',
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const output = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D',
    'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];

  let result = '';

  for (let i = 0; i < str.length; i += 1) {
    const index = input.findIndex((element) => element === str[i]);
    if (index === -1) {
      result += str[i];
    } else {
      result += output[index];
    }
  }

  return result;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  let flag = false;
  if (typeof value === 'string' || value instanceof String) flag = true;
  return flag;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */

function suitsSwitch(suit, index) {
  let result = 0;
  switch (suit) {
    case '♣': {
      result = index;
      break;
    }
    case '♦': {
      result = index + 13;
      break;
    }
    case '♥': {
      result = index + 26;
      break;
    }
    case '♠': {
      result = index + 39;
      break;
    }
    default: result = index;
  }

  return result;
}

function getCardId(value) {
  let index = 0;

  switch (value[0]) {
    case 'A': {
      switch (value[1]) {
        case '♣': {
          index = suitsSwitch('♣', 0);
          break;
        }
        case '♦': {
          index = suitsSwitch('♦', 0);
          break;
        }
        case '♥': {
          index = suitsSwitch('♥', 0);
          break;
        }
        case '♠': {
          index = suitsSwitch('♠', 0);
          break;
        }
        default: index = 0;
      }
      break;
    }
    case 'J': {
      switch (value[1]) {
        case '♣': {
          index = suitsSwitch('♣', 10);
          break;
        }
        case '♦': {
          index = suitsSwitch('♦', 10);
          break;
        }
        case '♥': {
          index = suitsSwitch('♥', 10);
          break;
        }
        case '♠': {
          index = suitsSwitch('♠', 10);
          break;
        }
        default: index = 0;
      }
      break;
    }
    case 'Q': {
      switch (value[1]) {
        case '♣': {
          index = suitsSwitch('♣', 11);
          break;
        }
        case '♦': {
          index = suitsSwitch('♦', 11);
          break;
        }
        case '♥': {
          index = suitsSwitch('♥', 11);
          break;
        }
        case '♠': {
          index = suitsSwitch('♠', 11);
          break;
        }
        default: index = 0;
      }
      break;
    }
    case 'K': {
      switch (value[1]) {
        case '♣': {
          index = suitsSwitch('♣', 12);
          break;
        }
        case '♦': {
          index = suitsSwitch('♦', 12);
          break;
        }
        case '♥': {
          index = suitsSwitch('♥', 12);
          break;
        }
        case '♠': {
          index = suitsSwitch('♠', 12);
          break;
        }
        default: index = 0;
      }
      break;
    }
    default: {
      switch (value[1]) {
        case '♣': {
          index = suitsSwitch('♣', +value[0] - 1);
          break;
        }
        case '♦': {
          index = suitsSwitch('♦', +value[0] - 1);
          break;
        }
        case '♥': {
          index = suitsSwitch('♥', +value[0] - 1);
          break;
        }
        case '♠': {
          index = suitsSwitch('♠', +value[0] - 1);
          break;
        }
        default: index = 0;
      }
    }
  }

  if (value.length === 3) {
    switch (value[2]) {
      case '♣': {
        index = suitsSwitch('♣', 9);
        break;
      }
      case '♦': {
        index = suitsSwitch('♦', 9);
        break;
      }
      case '♥': {
        index = suitsSwitch('♥', 9);
        break;
      }
      case '♠': {
        index = suitsSwitch('♠', 9);
        break;
      }
      default: index = 0;
    }
  }

  return index;
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
