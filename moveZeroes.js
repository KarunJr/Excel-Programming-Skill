// 283. Move Zeroes
/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.
*/

const moveZeroes = (nums) => {
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos] = nums[i];
      pos++;
    }
  }
  for (let j = pos; j < nums.length; j++) {
    nums[j] = 0;
  }
  return nums;
};

const nums = [0, 1, 0, 3, 12];
// const nums = [0, 0, 1];
const result = moveZeroes(nums);

console.log(result);

/*
const nums = [0, 1, 0, 3, 12];
nums.splice(0, 1)
nums.push(0)
console.log(nums);
*/
