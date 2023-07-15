function sort(array) {
    for (let index = 1; index < array.length; index++) {
      const element = array[index];
      let j = index - 1;
      while (j >= 0 && array[j] > element) {
        array[j + 1] = array[j];
        j--;
        console.log(j);
      }
      array[j + 1] = element;
    }
    return array;
  }
  
  console.log(sort([2, 5, 1, 3, 7, 4]));
  