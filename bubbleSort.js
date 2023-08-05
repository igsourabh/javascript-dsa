function bubbleSort(array) {
    for (let index = array.length-1; index > 0; index--) {
      
      for (let j = 0; j < array.length; j++) {
        console.log(j,index);
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    //   console.log(array);
    }
    return array
  }
  
  console.log(bubbleSort([2, 7, 4, 3, 5, 9, 1]));
  