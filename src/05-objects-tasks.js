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
function Rectangle(width, height) {
  // throw new Error('Not implemented');
  this.width = width;
  this.height = height;
  this.getArea = () => this.width * this.height;
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
  const obj = Object.create(proto);
  Object.assign(obj, JSON.parse(json));
  return obj;
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

class CSS {
  constructor(info) {
    if (info == null) {
      this.info = '';
    } else {
      this.info = info;
    }
    this.ID = false;
    this.EL = false;
    this.PE = false;
    this.CL = false;
    this.AL = ['el', 'id', 'cl', 'at', 'pc', 'pe'];
  }

  element(value) {
    if (this.EL) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }

    if (this.info !== '') {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    this.delete('el');
    this.EL = true;
    this.info = value;
    return this;
  }

  id(value) {
    if (this.ID) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }
    if (!this.ready('id')) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    this.delete('id');
    this.ID = true;
    this.info += `#${value}`;
    return this;
  }

  class(value) {
    if (!this.ready('cl')) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    this.delete('cl');
    this.info += `.${value}`;
    return this;
  }

  attr(value) {
    if (!this.ready('at')) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    this.delete('at');
    this.info += `[${value}]`;
    return this;
  }

  pseudoClass(value) {
    if (!this.ready('pc')) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }

    this.delete('pc');
    this.info += `:${value}`;
    return this;
  }

  pseudoElement(value) {
    if (this.PE) {
      throw new Error('Element, id and pseudo-element should not occur more then one time inside the selector');
    }

    if (!this.ready('pe')) {
      throw new Error('Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element');
    }
    this.delete('pe');
    this.PE = true;
    this.info += `::${value}`;
    return this;
  }

  stringify() {
    return this.info;
  }

  delete(name) {
    this.AL.splice(0, this.AL.indexOf(name), 1);
  }

  ready(name) {
    return this.AL.indexOf(name) > -1;
  }
}

const cssSelectorBuilder = {
  element(value) {
    return new CSS().element(value);
  },

  id(value) {
    return new CSS().id(value);
  },

  class(value) {
    return new CSS().class(value);
  },

  attr(value) {
    return new CSS().attr(value);
  },

  pseudoClass(value) {
    return new CSS().pseudoClass(value);
  },

  pseudoElement(value) {
    return new CSS().pseudoElement(value);
  },

  combine(selector1, combinator, selector2) {
    return new CSS(`${selector1.stringify()} ${combinator} ${selector2.stringify()}`);
  },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
