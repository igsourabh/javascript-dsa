function bubbleSort(array) {
    for (let index = array.length; index > 0; index--) {
      for (let j = 0; j < array.length; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[(k = j + 1)], array[j]];
        }
      }
    //   console.log(array);
    }
    return array
  }
  
  console.log(bubbleSort([2, 7, 4, 3, 5, 9, 1]));
  