/**
 * The function `checkDuplicate` takes an array as input and returns an object that counts the number
 * of occurrences of each element in the array.
 * @param array - The `array` parameter is an array of numbers.
 * @returns The function `checkDuplicate` returns an object that contains the count of each element in
 * the array.
 */
let arr = [2, 4, 4, 2, 3, 6, 5, 7, 4];

function checkDuplicate(array) {
  let temp = {};
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (temp[element]) {
      temp[element] += 1;
    } else {
      temp[element] = 1;
    }
  }
  return temp;
}

console.log(checkDuplicate(arr));
