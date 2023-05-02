function findlargest(array, num) {
    let max = 0;
    for (let i = 0; i < array.length - num + 1; i++) {
      let temp = 0;
      for (let j = 0; j < num; j++) {
        // console.log(j);
        temp += array[i + j];
        //   array[i + j]; this is main post of this logic this will start loop from 5,8
      }
      console.log({max,temp})
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  const a = findlargest([1, 2, 3, 4, 5, 6, 7, 8], 4);
  console.log(a);