'use strict';
const Util = require('util');
const assertString = function(item) {

    if (typeof item !== 'string') {
        throw new TypeError(`Item ${Util.inspect(item)} is not a string.`)
    }
}

module.exports = class extends Map {

    constructor() {

        super();
    }

    set(start, selector, target) {

        assertString(start);
        assertString(selector);
        assertString(target);

        if (!super.has(start)) {
            super.set(start, new Map());
        }
        return super.get(start).set(selector, target);
    }

    get(start, selector) {

        assertString(start);
        assertString(selector);
        const map = super.get(start);
        if (map === undefined) {
            return undefined;
        }
        return super.get(start).get(selector);
    }
};

