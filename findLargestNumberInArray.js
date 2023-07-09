/**
 * The function `findLargestNumber` takes an array of numbers and returns the largest number in the
 * array.
 * @param array - The array parameter is an array of numbers: [1, 3, 4, 2, 5, 11, 6, 2, 10, 9].
 * @returns The largest number in the array, which is 11.
 */
let arr = [1, 3, 4, 2, 5, 11, 6, 2, 10, 9];

//  1<3 true temp=3
//  3<4 true temp=4
//  4<2 false temp=4
//  4<5 true temp=5
//  5<11 true temp=11
//  11<6 false temp=11
//  11<2 false temp=11
//  11<10 false temp=11
//  11<9 false temp=11

function findLargestNumber(array) {
  let temp = array[0];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (temp < element) {
      temp = element;
    }
  }
  return temp;
}

console.log(findLargestNumber(arr));
