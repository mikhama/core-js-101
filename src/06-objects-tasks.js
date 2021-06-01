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
}
Rectangle.prototype.getArea = function getArea() {
  const area = this.width * this.height;
  return area;
};


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
  const newObj = JSON.parse(json);
  return Object.assign(Object.create(proto), newObj);
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
  createElement() {
    function Element() {
      this.state = {};
    }

    function checkOrder(criteria) {
      if (criteria) {
        throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
      }
    }

    function checkSingle(criteria) {
      if (criteria) {
        throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
      }
    }


    Element.prototype.element = function element(value) {
      checkOrder(this.state.id !== undefined);
      checkSingle(this.state.element !== undefined);

      this.state.element = value;

      return this;
    };

    Element.prototype.id = function id(value) {
      checkOrder(this.state.class !== undefined || this.state.pseudoElement !== undefined);
      checkSingle(this.state.id !== undefined);

      this.state.id = `#${value}`;

      return this;
    };

    Element.prototype.class = function _class(value) {
      checkOrder(this.state.attr !== undefined);

      if (this.state.class === undefined) {
        this.state.class = '';
      }

      this.state.class += `.${value}`;

      return this;
    };

    Element.prototype.attr = function attr(value) {
      checkOrder(this.state.pseudoClass !== undefined);

      this.state.attr = `[${value}]`;

      return this;
    };

    Element.prototype.pseudoClass = function pseudoClass(value) {
      checkOrder(this.state.pseudoElement !== undefined);

      if (this.state.pseudoClass === undefined) {
        this.state.pseudoClass = '';
      }

      this.state.pseudoClass += `:${value}`;

      return this;
    };

    Element.prototype.pseudoElement = function pseudoElement(value) {
      checkSingle(this.state.pseudoElement !== undefined);

      this.state.pseudoElement = `::${value}`;
      return this;
    };

    Element.prototype.stringify = function stringify() {
      let res = '';

      if (this.state.element !== undefined) {
        res += `${this.state.element}`;
      }

      if (this.state.id !== undefined) {
        res += `${this.state.id}`;
      }

      if (this.state.class !== undefined) {
        res += `${this.state.class}`;
      }

      if (this.state.attr !== undefined) {
        res += `${this.state.attr}`;
      }

      if (this.state.pseudoClass !== undefined) {
        res += `${this.state.pseudoClass}`;
      }

      if (this.state.pseudoElement !== undefined) {
        res += `${this.state.pseudoElement}`;
      }

      if (this.state.combine !== undefined) {
        res += `${this.state.combine}`;
      }

      this.state = {};

      return res;
    };

    return new Element();
  },

  element(value) {
    return this.createElement().element(value);
  },

  id(value) {
    return this.createElement().id(value);
  },

  class(value) {
    return this.createElement().class(value);
  },

  attr(value) {
    return this.createElement().attr(value);
  },

  pseudoClass(value) {
    return this.createElement().pseudoClass(value);
  },

  pseudoElement(value) {
    return this.createElement().pseudoElement(value);
  },

  combined: '',
  combine(selector1, combinator, selector2) {
    this.combined = `${selector1.stringify()}`
      .concat(` ${combinator} `)
      .concat(`${selector2.stringify()}`);
    return this;
  },

  stringify() {
    return this.combined;
  },
};

module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
