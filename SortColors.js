var sortColors = function (nums) {
    for (let index = 1; index < nums.length; index++) {
      const element = nums[index];
      let j = index - 1;
      while (j >= 0 && nums[j] > element) {
        nums[j + 1] = nums[j];
        j--;
      }
      nums[j + 1] = element;
    }
    return nums;
  };
  console.log(sortColors([2, 0, 2, 1, 1, 0]));
  