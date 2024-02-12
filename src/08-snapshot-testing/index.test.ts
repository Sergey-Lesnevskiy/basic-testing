// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const value = [1, 2, 3];
  const exampleList = {
    value: 1,
    next: { value: 2, next: { value: 3, next: { value: null, next: null } } },
  };
  test('should generate linked list from values 1', () => {
    const generatedList = generateLinkedList(value);
    expect(generatedList).toStrictEqual(exampleList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const value = [4, 5, 6];
    const generatedList = generateLinkedList(value);
    expect(generatedList).toMatchSnapshot();
  });
});
