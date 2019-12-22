const assert = require('assert');
const tasks = require('../src/01-strings-tasks');
it.optional = require('../extensions/it-optional');

describe('01-strings-tasks', () => {
  it.optional('concatenateStrings should return concatenation of two strings', () => {
    assert.equal('aabb', tasks.concatenateStrings('aa', 'bb'));
    assert.equal('aa', tasks.concatenateStrings('aa', ''));
    assert.equal('bb', tasks.concatenateStrings('', 'bb'));
  });

  it.optional('getStringLength should return the length of string', () => {
    assert.equal(5, tasks.getStringLength('aaaaa'), "'aaaaa' length should be 5");
    assert.equal(0, tasks.getStringLength(''), "'' length should be 0");
  });

  it.optional('getStringFromTemplate should create a string from template using given parameters', () => {
    assert.equal('Hello, John Doe!', tasks.getStringFromTemplate('John', 'Doe'));
    assert.equal('Hello, Chuck Norris!', tasks.getStringFromTemplate('Chuck', 'Norris'));
  });

  it.optional('getFirstChar should return the first char from given string', () => {
    assert.equal('J', tasks.getFirstChar('John Doe'));
    assert.equal('c', tasks.getFirstChar('cat'));
  });

  it.optional('extractNameFromTemplate should parse the name from given string', () => {
    assert.equal('John Doe', tasks.extractNameFromTemplate('Hello, John Doe!'));
    assert.equal('Chuck Norris', tasks.extractNameFromTemplate('Hello, Chuck Norris!'));
  });

  it.optional('removeLeadingAndTrailingWhitespaces should remove leading and trailing whitespaces from the string', () => {
    assert.equal('Abracadabra', tasks.removeLeadingAndTrailingWhitespaces('  Abracadabra'));
    assert.equal('cat', tasks.removeLeadingAndTrailingWhitespaces('cat'));
    assert.equal('Hello, World!', tasks.removeLeadingAndTrailingWhitespaces('\tHello, World! '));
  });

  it.optional('repeatString should repeat string specified number of times', () => {
    assert.equal('AAAAA', tasks.repeatString('A', 5));
    assert.equal('catcatcat', tasks.repeatString('cat', 3));
  });

  it.optional('removeFirstOccurrences should remove all specified values from a string', () => {
    assert.equal('To be or to be', tasks.removeFirstOccurrences('To be or not to be', ' not'));
    assert.equal('I like legs', tasks.removeFirstOccurrences('I like legends', 'end'));
    assert.equal('ABAB', tasks.removeFirstOccurrences('ABABAB', 'BA'));
  });

  it.optional('unbracketTag should remove first and last angle brackets from tag string', () => {
    assert.equal('div', tasks.unbracketTag('<div>'));
    assert.equal('span', tasks.unbracketTag('<span>'));
    assert.equal('a', tasks.unbracketTag('<a>'));
  });

  it.optional('convertToUpperCase should convert all chars from specified string into upper case', () => {
    assert.equal('THUNDERSTRUCK', tasks.convertToUpperCase('Thunderstruck'));
    assert.equal('ABCDEFGHIJKLMNOPQRSTUVWXYZ', tasks.convertToUpperCase('abcdefghijklmnopqrstuvwxyz'));
  });

  it.optional('extractEmails should extract emails from string list delimeted by semicolons', () => {
    assert.deepEqual(
      ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com'],
      tasks.extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'),
    );
    assert.deepEqual(
      ['info@gmail.com'],
      tasks.extractEmails('info@gmail.com'),
    );
  });

  it.optional('getRectangleString should return the string reprentation of rectangle with specified size', () => {
    assert.equal(
      // eslint-disable-next-line indent
        '┌────┐\n'
      + '│    │\n'
      + '│    │\n'
      + '└────┘\n',
      tasks.getRectangleString(6, 4),
    );
    assert.deepEqual(
      // eslint-disable-next-line indent
        '┌┐\n'
      + '└┘\n',
      tasks.getRectangleString(2, 2),
    );
    assert.deepEqual(
      // eslint-disable-next-line indent
        '┌──────────┐\n'
      + '│          │\n'
      + '└──────────┘\n',
      tasks.getRectangleString(12, 3),
    );
  });

  it.optional('encodeToRot13 should encode-decode string using ROT13 algorithm', () => {
    assert.equal('uryyb', tasks.encodeToRot13('hello'));
    assert.equal('Jul qvq gur puvpxra pebff gur ebnq?', tasks.encodeToRot13('Why did the chicken cross the road?'));
    assert.equal('To get to the other side!', tasks.encodeToRot13('Gb trg gb gur bgure fvqr!'));
    assert.equal(
      'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm',
      tasks.encodeToRot13('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'),
    );
  });

  it.optional('isString should return true if argument is a string', () => {
    assert.equal(false, tasks.isString(), 'undefined');
    assert.equal(false, tasks.isString(null), 'null');
    assert.equal(false, tasks.isString([]), '[]');
    assert.equal(true, tasks.isString('test'), 'test');
    // eslint-disable-next-line no-new-wrappers
    assert.equal(true, tasks.isString(new String('test')), "new String('test')");
  });

  it.optional('getCardId should return the index of card in the initial deck', () => {
    [
      'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
      'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
      'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
      'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
    ].forEach((val, index) => {
      assert.equal(
        index,
        tasks.getCardId(val),
        `Invalid id for card '${val}':`,
      );
    });
  });
});
