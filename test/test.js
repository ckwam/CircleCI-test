'use strict';
const assert = require('assert');
const pm = require('../');

describe('#productMax()', () => {
  it('正確な計算ができる', () => {
    assert.equal(pm.productMax(1, 2, 3, 4), 8);
    assert.equal(pm.productMax(150, 200, 36, 428), 85600);
  });
  it('負の値の計算ができる', () => {
    assert.equal(pm.productMax(-1, -2, 3, 4), -3);
    assert.equal(pm.productMax(-1, -2, -3, -4), 8);
  });
});