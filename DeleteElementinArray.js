const arr = [20, 41, 76, 25, 18, 54, 29, 45];

function DeleteInarray(arr, position) {
  for (let i = position; i < arr.length - 1; i++) {
    const element = arr[i];
    console.log(element);
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

const data = DeleteInarray(arr, 3);
console.log(data);
