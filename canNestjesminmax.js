/**
 * The function `canNest` checks if the elements of `arr1` can be nested inside the elements of `arr2`
 * by comparing the minimum and maximum values of each array.
 * @param arr1 - [9, 9, 8]
 * @param arr2 - [8, 9]
 * @returns The function `canNest` is returning a boolean value.
 */
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
  