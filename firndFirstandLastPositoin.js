let arr = [5, 7, 7, 8, 8, 10];

function findFirstAndLastPosition(array, target) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element == target) {
      result[result.length] = index;
    }
  }
  return result.length ? result : [-1, -1];
}

console.log(findFirstAndLastPosition(arr, 8));
