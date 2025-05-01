/*
Expectation:
    const array = [1, [2, [3, [4]]]] // [1, 2, 3, 4]
    flatten(array) // [1, 2, 3, 4]
Explanation:
    - Return new array
    - If array is empty, return empty array
    - If array is not empty, loop through array and push each item to new array
    - If item is array, call flatten function recursively until item is not array
*/

type ArrayValue = unknown | Array<ArrayValue>;

export default function flatten(value: Array<ArrayValue>): Array<unknown> {
  let result: Array<unknown> = [];
  for (const item of value) {
    if (Array.isArray(item)) {
      result = [...result, ...flatten(item)];
    } else {
      result.push(item);
    }
  }
  return result;
}
