// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';
const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 13, b: 2, action: Action.Subtract, expected: 11 },
  { a: 31, b: 2, action: Action.Subtract, expected: 29 },
  { a: 2, b: 2, action: Action.Divide, expected: 1 },
  { a: 10, b: 2, action: Action.Divide, expected: 5 },
  { a: 16, b: 2, action: Action.Divide, expected: 8 },
  { a: 10, b: 2, action: Action.Multiply, expected: 20 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 3, b: 5, action: Action.Multiply, expected: 15 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 4, b: 4, action: Action.Exponentiate, expected: 256 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'table with test cases',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
