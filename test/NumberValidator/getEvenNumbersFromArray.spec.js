import { expect } from 'chai';
import NumbersValidator from '../../app/code.js';

describe('getEvenNumbersFromArray', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive test', () => {
    it('should return array of even numbers', () => {
      const validationResults = validator.getEvenNumbersFromArray([1, 2, 3, 4, 5, 6, 7]);
      expect(validationResults).to.be.deep.equal([2, 4, 6]);
    });
  });

  describe('Negative test', () => {
    it('should return array of uneven numbers', () => {
      const validationResults = validator.getEvenNumbersFromArray([1, 3, 5, 7]);
      expect(validationResults).to.be.deep.equal([]);
    });
  });
});
