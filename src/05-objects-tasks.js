/* ************************************************************************************************
 *                                                                                                *
 * Please read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectangle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
// eslint-disable-next-line max-classes-per-file
class Rectangle {
  // throw new Error('Not implemented');
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.height * this.width;
  }
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  // throw new Error('Not implemented');
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(proto, json) {
  // throw new Error('Not implemented');
  const pars = JSON.parse(json);
  const arg = Object.values(pars);
  return new proto.constructor(...arg);
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurrences
 *
 * All types of selectors can be combined using the combination ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string representation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */
class SetCssSelector {
  constructor() {
    this.selector = '';
    this.elementRepeat = false;
    this.idRepeat = false;
    this.classNameRepeat = false;
    this.attrRepeat = false;
    this.pseudoClassRepeat = false;
    this.pseudoElementRepeat = false;
    this.order = 0;
    this.repeatError = 'Element, id and pseudo-element should not occur more then one time inside the selector';
    this.positionEror = 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element';
  }

  element(value) {
    if (this.elementRepeat) throw new Error(this.repeatError);
    this.elementRepeat = true;
    if (this.order > 1) throw new Error(this.positionEror);
    this.order = 1;
    this.selector += `${value}`;
    return this;
  }

  id(value) {
    if (this.idRepeat) throw new Error(this.repeatError);
    this.idRepeat = true;
    if (this.order > 2) throw new Error(this.positionEror);
    this.order = 2;
    this.selector += `#${value}`;
    return this;
  }

  class(value) {
    if (this.order > 3) throw new Error(this.positionEror);
    this.order = 3;
    this.selector += `.${value}`;
    return this;
  }

  attr(value) {
    if (this.order > 4) throw new Error(this.positionEror);
    this.order = 4;
    this.selector += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    if (this.order > 5) throw new Error(this.positionEror);
    this.order = 5;
    this.selector += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    if (this.pseudoElementRepeat) throw new Error(this.repeatError);
    this.pseudoElementRepeat = true;
    if (this.order > 6) throw new Error(this.positionEror);
    this.order = 6;
    this.selector += `::${value}`;
    return this;
  }

  // eslint-disable-next-line class-methods-use-this
  combine(selector1, combination, selector2) {
    this.selector += `${selector1.stringify()} ${combination} ${selector2.stringify()}`;
    return this;
  }

  stringify() {
    return this.selector;
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new SetCssSelector().element(value);
  },

  id(value) {
    return new SetCssSelector().id(value);
  },

  class(value) {
    return new SetCssSelector().class(value);
  },

  attr(value) {
    return new SetCssSelector().attr(value);
  },

  pseudoClass(value) {
    return new SetCssSelector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new SetCssSelector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return new SetCssSelector().combine(selector1, combinator, selector2);
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
