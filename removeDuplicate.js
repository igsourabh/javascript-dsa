var removeDuplicates = function (nums) {
    let obj = {};
    let arr = [];
    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      if (obj[element] !== undefined) {
        obj[element] += 1;
      } else {
        obj[element] = 1;
      }
    }
    for (const iterator in obj) {
      arr[arr.length] = parseInt(iterator);
      obj[iterator]--;
    }
    for (const iterator1 in obj) {
      if (obj[iterator1]) {
        arr[arr.length] = "_";
      }
    }
    nums = arr;
    return nums;
  };
  
  console.log(removeDuplicates([1, 1, 2]));
  