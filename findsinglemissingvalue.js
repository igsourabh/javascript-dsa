/**
 * The function `findSameValue` compares two objects and returns a new object containing key-value
 * pairs that have the same value in both objects.
 * @param obj1 - { a: 1, b: 2, c: 3, d: 10, e: 12 }
 * @param obj2 - { a: 2, e: 12, f: 6, d: 10 }
 * @returns The function `findSameValue` returns an object that contains the keys and values that are
 * present in both `obj1` and `obj2`.
 */

let arr = [1, 3, 4, 6, 8, 9, 11, 13, 14, 15, 17];

for (let i = 0; i < arr.length; i++) {
  const repe = arr[i];

  if (repe + 1 + 1 == arr[i + 1]) {
    console.log(repe + 1);
  }
}
