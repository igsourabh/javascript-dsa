/**
 * The function `DeleteInarray` takes an array and a position as input, and removes the element at that
 * position from the array.
 * @param arr - The `arr` parameter is an array containing the elements `[20, 41, 76, 25, 18, 54, 29,
 * 45]`.
 * @param position - The position parameter in the DeleteInarray function is the index of the element
 * in the array that you want to delete. In this case, the position is 3, which means the element at
 * index 3 (25) will be deleted from the array.
 * @returns The function `DeleteInarray` returns the modified array `arr` after deleting the element at
 * the specified position.
 */
const arr = [20, 41, 76, 25, 18, 54, 29, 45];

function DeleteInarray(arr, position) {
  for (let i = position; i < arr.length - 1; i++) {
    const element = arr[i];
    console.log(element);
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

const data = DeleteInarray(arr, 3);
console.log(data);
