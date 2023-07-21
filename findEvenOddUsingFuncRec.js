let i = 0;
let resultOdd = [];
let resultEven = [];
function findOdd(array) {
  if (i < array.length) {
    if (array[i] % 2 !== 0) {
      resultOdd[resultOdd.length] = array[i];
    } else {
      resultEven[resultEven.length] = array[i];
    }
    i++;
    findOdd(array);
  }

  return { resultOdd, resultEven };
}

console.log(findOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));
