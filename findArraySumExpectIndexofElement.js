/**
 * The function `sum` takes an array of numbers and returns a new array where each element is the sum
 * of all the other elements in the original array.
 * @param array - The parameter `array` is an array of numbers.
 * @returns an array containing the sum of all elements in the input array, excluding the element at
 * each index.
 */
function sum(array) {
    let result = [];
    let temp = {};
    for (let index = 0; index < array.length; index++) {
      for (let j = 0; j < array.length; j++) {
        const element2 = array[j];
        if (j !== index) {
          if (temp[index]) {
            temp[index] += element2;
          } else {
            temp[index] = element2;
          }
        }
      }
    }
    for (const iterator in temp) {
      result[result.length] = temp[iterator];
    }
    return result;
  }
  
  console.log(sum([2, 7, 11, 4, -2]));
  
  