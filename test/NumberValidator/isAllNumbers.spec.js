import { expect } from 'chai';
import NumbersValidator from '../../app/code.js';

describe('isAllNumbers', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive test', () => {
    it('should return true if all are numbers', () => {
      const validationResults = validator.isAllNumbers([2, 4, 6]);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('Negative test', () => {
    it('should return false if not all are numbers', () => {
      const validationResults = validator.isAllNumbers([1, 'o', 4]);
      expect(validationResults).to.be.equal(false);
    });
    it('should return an error when provided not an array', () => {
      expect(() => {
        validator.isAllNumbers('A');
      }).to.throw('[A] is not an array');
    });
  });
});
