import { expect } from 'chai';
import NumbersValidator from '../../app/code.js';

describe('isInteger', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive test', () => {
    it('should return true if value is integer', () => {
      const validationResults = validator.isInteger(4);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('Negative test', () => {
    it('should return false if value is integer', () => {
      const validationResults = validator.isNumberEven(3);
      expect(validationResults).to.be.equal(false);
    });
  });
});
