const arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9];

function checkuniqurevalue(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      // this will only work if 1,2 appear as index 1,2 and i value increate in only if condition
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

const a = checkuniqurevalue(arr);
console.log(a);
