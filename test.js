'use strict';
const Assert = require('assert');
const TransitionMap = require('./index');

const map = new TransitionMap();

map.set('a', 't1', 'b');
map.set('a', 't2', 'c');
map.set('b', 't2', 'a');
map.set('c', '', 'd');

Assert.equal(map.get('a', 't1'), 'b');
Assert.equal(map.get('a', 't2'), 'c');
Assert.equal(map.get('a', '999'), undefined);
Assert.throws(() => map.get('', 10));
Assert.throws(() => map.set('', 10));
