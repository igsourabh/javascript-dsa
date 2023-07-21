let i = 0;
let j = 1;
let ar = [1, 4, 3, 2, 8, 7];
let neww=[]
function checkSorted(array) {
  // console.log(array);
  for (let index = 0; index < array.length; index++) {
    if (array[index] > array[index + 1]) {
      return false;
    }
  }
  
  return array;
}
function sortRecur(arr) {
  if (checkSorted(arr)) {
    neww=arr
    console.log(arr);
    return 
  } else if (arr[i] < arr[j]) {
    i++;
    j++;

    sortRecur(arr);
  } else {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i = 0;
    j = 1;
    sortRecur(arr);
  }
}

console.log(sortRecur(ar));
