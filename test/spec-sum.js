const { expect } = require('chai');
const root = process.mainModule.paths[0].split('node_modules')[0];
const math = require(root);

describe(`The 'sum' function`, function () {
  it(`should return 0.3 when adding 0.1 and 0.2.`, function () {
    expect(math.sum(0.1, 0.2)).to.equal(0.3);
  });
});