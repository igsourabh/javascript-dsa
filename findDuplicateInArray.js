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
