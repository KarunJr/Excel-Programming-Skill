// 896. Monotonic Array
/*
An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.
*/

const isMonotonic = (nums) => {
  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 1; i < nums.length; i++) {
    //for decreasing
    if (nums[i] > nums[i - 1]) isDecreasing = false;

    //for increasing
    if (nums[i] < nums[i - 1]) isIncreasing = false;
  }

  return isIncreasing || isDecreasing;
};

const nums = [6, 5, 4, 4];
// nums =
const result = isMonotonic(nums);
console.log(result);

//   for (let i = 1; i < nums.length; i++) {
//     isIncreasing = nums[i];
//     isDecreasing = nums[i];
//     if (isIncreasing > nums[i - 1]) {
//       if (isIncreasing < nums[i - 1]) {
//         return false;
//       }
//     }else if(isDecreasing < nums[i - 1]){
//         if(is)
//     }
//     return true;
//   }
