/**
 * The function `findMissingOddNumber` takes an array of odd numbers and returns the missing odd number
 * in the sequence.
 * @param array - The `array` parameter is an array of numbers.
 * @returns The missing odd number in the array is being returned.
 */
function findMissingOddNumber(array) {
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    const prevelement = array[index - 1];
    if (prevelement !== element - 2) {
      console.log();
      return element - 2;
    }
  }
}

console.log(findMissingOddNumber([5, 7, 9, 11, 15, 17]));
