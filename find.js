// let = [-5, -4, -3, -2, 0, 1, 2, 4, 6];

function getarrayvalue(array) {
  for (let number of array) {
    for (let j = 1; j < array.length; j++) {
      if (number + array[j] === 0) {
        return [number, array[j]];
      }
      console.log(array[j]);
    }
  }
}

let b = getarrayvalue([-5, -4, -3, -2, 0, 2, 4, 6, 8]);
console.log(b);
