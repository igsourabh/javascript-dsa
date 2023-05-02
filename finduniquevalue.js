let arr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 7, 8, 8, 9, 9];

function checkuniqurevalue(array) {
  console.log(array)
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    console.log({i,j})
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return array
}

const a = checkuniqurevalue(arr);
console.log(a);
