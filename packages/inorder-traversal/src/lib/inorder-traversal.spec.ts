import { MultidimensionalArray, inorderTraversal } from './inorder-traversal';

describe('inorderTraversal', () => {
  it('should work', () => {
    const arr = [[[6]], [1, 3], []];
    const generator = inorderTraversal(arr);
    expect(generator.next().value).toEqual(6);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().done).toEqual(true);
  });

  it('empty array', () => {
    const arr: MultidimensionalArray = [];
    const generator = inorderTraversal(arr);
    expect(generator.next().value).toBeUndefined();
  });
});
