import { expect } from 'chai';
import NumbersValidator from '../../app/code.js';

describe('isNumberEven', () => {
  let validator;

  beforeEach(() => {
    validator = new NumbersValidator();
  });

  afterEach(() => {
    validator = null;
  });

  describe('Positive test', () => {
    it('should return true when provided with an even number', () => {
      const validationResults = validator.isNumberEven(4);
      expect(validationResults).to.be.equal(true);
    });
  });

  describe('Negative test', () => {
    it('should return an error when provided with an uneven number', () => {
      expect(() => {
        validator.isNumberEven('A');
      }).to.throw('[A] is not of type "Number" it is of type "string"');
    });
    it('should return false when provided with an uneven number', () => {
      const validationResults = validator.isNumberEven(3);
      expect(validationResults).to.be.equal(false);
    });
  });
});
