

function getmaxiumnumber(array, num) {
  if (num > array) {
    throw new Error("error");
  } else {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        
        temp += array[i + j];
        console.log(temp)

      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
}

const a = getmaxiumnumber([1, 2, 3, 4, 3, 5, 4, 6, 7, 8], 4);
console.log(a);
