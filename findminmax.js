/**
 * The minMax function takes an array of numbers as input and returns an array containing the minimum
 * and maximum values from the input array.
 * @param arr - The parameter `arr` is an array of numbers.
 * @returns The function `minMax` returns an array containing the minimum and maximum values from the
 * input array `[2, 4, 6, 8]`.
 */
function minMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
  
    }
    return [min,max]
  }
  const a = minMax([2, 4, 6, 8]);
  console.log(a);
  