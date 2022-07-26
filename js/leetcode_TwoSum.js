// https://leetcode.com/problems/two-sum/
var twoSum = function(nums, target) {
  let secondInd = 0;
  for (let i = 0; i < nums.length; i++) {
    secondInd = nums.indexOf(target - nums[i], i+1);
    if (nums[i] + nums[secondInd] === target) return [i, secondInd];
  }
};
