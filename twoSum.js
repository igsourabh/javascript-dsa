let numss = [2, 7, 11, 15];

function twoSum(nums, target) {
  const numObj = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    let complement = target - num;
    if (complement in numObj) {
      return [numObj[complement], i];
    }
    numObj[num] = i;
  }

  return [];
}

console.log(twoSum(numss, 18));
