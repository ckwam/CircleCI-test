'use strict';
const assert = require('assert');
const index = require('../');

describe('#productMax()', () => {
  it('正確な計算ができる', () => {
    assert.equal(index.productMax(1, 2, 3, 4), 8);
    assert.equal(index.productMax(150, 200, 36, 428), 85600);
  });
  it('負の値の計算ができる', () => {
    assert.equal(index.productMax(-1, -2, 3, 4), -3);
    assert.equal(index.productMax(-1, -2, -3, -4), 8);
  });
});