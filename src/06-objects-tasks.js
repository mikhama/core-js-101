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
function Rectangle(/* width, height */) {
  throw new Error('Not implemented');
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
function getJSON(/* obj */) {
  throw new Error('Not implemented');
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
function fromJSON(/* proto, json */) {
  throw new Error('Not implemented');
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

/* eslint max-classes-per-file: ["error", 5] */

class CssSelector {
  element(value) {
    if (this.elem) {
      throw new Error('Element already specified!');
    }
    this.elem = value;
    return this;
  }

  id(value) {
    if (this.ident) {
      throw new Error('Id already specified!');
    }
    this.ident = value;
    return this;
  }

  class(value) {
    if (this.classesLst === undefined) {
      this.classesLst = new Set();
    }
    this.classesLst.add(value);
    return this;
  }

  attr(value) {
    if (this.attrsLst === undefined) {
      this.attrsLst = new Set();
    }
    this.attrsLst.add(value);
    return this;
  }

  pseudoClass(value) {
    if (this.pseudoClassesLst === undefined) {
      this.pseudoClassesLst = new Set();
    }
    this.pseudoClassesLst.add(value);
    return this;
  }

  pseudoElement(value) {
    if (this.pseudoEl) {
      throw new Error('PseudoElement already specified!');
    }
    this.pseudoEl = value;
    return this;
  }

  stringify() {
    const elStr = this.elem || '';
    const id = this.ident ? `#${this.ident}` : '';
    const classList = this.classesLst ? (
      Array.from(this.classesLst).reduce((acc, cur) => `${acc}.${cur}`, '')
    ) : '';
    const attrList = this.attrsLst ? (
      Array.from(this.attrsLst).reduce((acc, cur) => `${acc}[${cur}]`, '')
    ) : '';
    const pseudoClassList = this.pseudoClassesLst ? (
      Array.from(this.pseudoClassesLst).reduce((acc, cur) => `${acc}:${cur}`, '')
    ) : '';
    const pseudoElement = this.pseudoEl ? `::${this.pseudoElement}` : '';

    return `${elStr}${id}${classList}${attrList}${pseudoClassList}${pseudoElement}`;
  }
}

class CssSelectorCombination {
  constructor(selector1, combinator, selector2) {
    if (!(selector1 && combinator && selector2)) {
      throw new Error('All selector1, combinator and selector2 should be specified!');
    }
    this.selector1 = selector1;
    this.selector2 = selector2;
    this.combinator = combinator;
  }

  stringify() {
    return `${this.selector1.stringify()} ${this.combinator} ${this.selector2.stringify()}`;
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new CssSelector().element(value);
  },

  id(value) {
    return new CssSelector().id(value);
  },

  class(value) {
    return new CssSelector().class(value);
  },

  attr(value) {
    return new CssSelector().attr(value);
  },

  pseudoClass(value) {
    return new CssSelector().pseudoClass(value);
  },

  pseudoElement(value) {
    return new CssSelector().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return new CssSelectorCombination(selector1, combinator, selector2);
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
