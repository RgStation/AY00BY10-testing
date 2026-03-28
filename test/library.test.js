const { expect } = require('chai');

const add = require('../src/add').default;
const divide = require('../src/divide').default;
const camelCase = require('../src/camelCase').default;
const capitalize = require('../src/capitalize').default;
const map = require('../src/map').default;

describe('Library tests', () => {

  it('should add two numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('should divide numbers', () => {
    expect(divide(6, 2)).to.equal(3);
  });

  it('should convert string to camelCase', () => {
    expect(camelCase('hello world')).to.equal('helloWorld');
  });

  it('should capitalize first letter', () => {
    expect(capitalize('hello')).to.equal('Hello');
  });

  it('should map array values', () => {
    const result = map([1, 2, 3], x => x * 2);
    expect(result).to.deep.equal([2, 4, 6]);
  });

});