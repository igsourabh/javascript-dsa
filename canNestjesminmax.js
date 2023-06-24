function canNest(arr1, arr2) {
    let arr1min = arr1[0];
    let arr1max = arr1[0];
  
    let arr2min = arr2[0];
    let arr2max = arr2[0];
    let result = false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] < arr1min) {
        arr1min = arr1[i];
      }
  
      if (arr1[i] > arr1max) {
        arr1max = arr1[i];
      }
    }
  
    for (let j = 0; j < arr2.length; j++) {
      if (arr2[j] < arr2min) {
        arr2min = arr2[j];
      }
  
      if (arr2[j] > arr2max) {
        arr2max = arr2[j];
      }
    }
    if (arr1min > arr2min && arr1max < arr2max) {
      result = true;
    } else {
      result = false;
    }
  
    return result;
  }
  const a = canNest([9, 9, 8], [8, 9]);
  console.log(a);
  