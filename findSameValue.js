/**
 * The function `findSameValue` compares two objects and returns a new object containing key-value
 * pairs that have the same value in both objects.
 * @param obj1 - { a: 1, b: 2, c: 3, d: 10, e: 12 }
 * @param obj2 - { a: 2, e: 12, f: 6, d: 10 }
 * @returns The function `findSameValue` returns an object that contains the keys and values that are
 * present in both `obj1` and `obj2`.
 */
let input1 = { a: 1, b: 2, c: 3, d: 10, e: 12 };
let input2 = { a: 2, e: 12, f: 6, d: 10 };

function findSameValue(obj1, obj2) {
  let result = {};
  for (const key in obj1) {
    console.log();
    if (obj1[key] == obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
}

console.log(findSameValue(input1, input2));
