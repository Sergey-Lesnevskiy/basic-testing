// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const act = {
      a: 11,
      b: 2,
      action: Action.Add,
    };
    const result = simpleCalculator(act);
    expect(result).toBe(13);
  });

  test('should subtract two numbers', () => {
    const act = {
      a: 15,
      b: 2,
      action: Action.Subtract,
    };
    const result = simpleCalculator(act);
    expect(result).toBe(13);
  });

  test('should multiply two numbers', () => {
    const act = {
      a: 1,
      b: 2,
      action: Action.Multiply,
    };
    const result = simpleCalculator(act);
    expect(result).toBe(2);
  });

  test('should divide two numbers', () => {
    const act = {
      a: 16,
      b: 2,
      action: Action.Divide,
    };
    const result = simpleCalculator(act);
    expect(result).toBe(8);
  });

  test('should exponentiate two numbers', () => {
    const act = {
      a: 2,
      b: 2,
      action: Action.Exponentiate,
    };
    const result = simpleCalculator(act);
    expect(result).toBe(4);
  });

  test('should return null for invalid action', () => {
    const act = {
      a: 11,
      b: 0,
      action: 'Action.Divide',
    };
    const result = simpleCalculator(act);
    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    const invalidArgumentsResult = simpleCalculator({
      a: '42',
      b: 2,
      action: Action.Add,
    });

    expect(invalidArgumentsResult).toBe(null);
  });
});
