//976. Largest Perimeter Triangle
/*
Given an integer array nums, return the largest perimeter of a triangle with a non-zero area, formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.
*/

var largestPerimeter = function (nums) {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i + 1] + nums[i + 2] > nums[i]) {
      return nums[i] + nums[i + 1] + nums[i + 2]
    }
  }
  return 0;
};

// const nums = [1, 2, 1, 10];
const nums = [2,1,2];

const result = largestPerimeter(nums);
console.log(result);
