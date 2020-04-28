/* ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectagle object with width and height parameters and getArea() method
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

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function getarea() { return this.width * this.height; };
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

const getJSON = (obj) => JSON.stringify(obj);


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
  const resultJSON = JSON.parse(json);
  Object.setPrototypeOf(obj, proto);
  return resultJSON;
}

/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation
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

const cssSelectorBuilder = {
  element(value) {
    const cssSelector = Object.create(this);

    if (cssSelector.elementValue) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    } else {
      cssSelector.elementValue = value;
    }
    this.check(cssSelector, cssSelector.elementValue);
    return cssSelector;
  },

  id(value) {
    const cssSelector = Object.create(this);

    if (cssSelector.idValue) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    } else {
      cssSelector.idValue = `#${value}`;
    }
    this.check(cssSelector, cssSelector.idValue);
    return cssSelector;
  },

  class(value) {
    const cssSelector = Object.create(this);

    cssSelector.classValue = `${cssSelector.classValue || ''}.${value}`;
    this.check(cssSelector, cssSelector.classValue);
    return cssSelector;
  },

  attr(value) {
    const cssSelector = Object.create(this);

    cssSelector.attrValue = `${cssSelector.attrValue || ''}[${value}]`;
    this.check(cssSelector, cssSelector.attrValue);
    return cssSelector;
  },

  pseudoClass(value) {
    const cssSelector = Object.create(this);

    cssSelector.pseudoClassValue = `${cssSelector.pseudoClassValue || ''}:${value}`;
    this.check(cssSelector, cssSelector.pseudoClassValue);
    return cssSelector;
  },

  pseudoElement(value) {
    const cssSelector = Object.create(this);

    if (cssSelector.pseudoElementValue) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    } else {
      cssSelector.pseudoElementValue = `::${value}`;
    }
    this.check(cssSelector, cssSelector.pseudoElementValue);
    return cssSelector;
  },

  combine(selector1, combinator, selector2) {
    const cssSelector = Object.create(this);

    cssSelector.combineValue = `${cssSelector.combineValue || ''}${selector1.stringify()} ${combinator} ${selector2.stringify()}`;
    return cssSelector;
  },

  stringify() {
    return `${this.combineValue || ''}${this.elementValue || ''}${this.idValue || ''}${this.classValue || ''}${this.attrValue || ''}${this.pseudoClassValue || ''}${this.pseudoElementValue || ''}`;
  },

  check(currentSelector, selector) {
    const properOrder = [
      currentSelector.elementValue, currentSelector.idValue,
      currentSelector.classValue, currentSelector.attrValue,
      currentSelector.pseudoClassValue, currentSelector.pseudoElementValue,
    ];
    properOrder.forEach((item, index) => {
      if (item && index > properOrder.indexOf(selector)) {
        throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
      }
    });
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
