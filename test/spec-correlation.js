const { expect } = require('chai');
const root = process.mainModule.paths[0].split('node_modules')[0];
const math = require(root);

describe(`The 'correlation' function`, function () {
  it(`should return about 0.968 for data sets [1, 3, 5, 5, 6] and [4, 6, 10, 12, 13].`, function () {
    expect(Math.round(1000 * math.correlation([1, 3, 5, 5, 6], [4, 6, 10, 12, 13]))/1000).to.equal(0.968);
  });
});