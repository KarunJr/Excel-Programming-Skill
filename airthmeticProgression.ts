// 1502. Can Make Arithmetic Progression From Sequence
/*
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/

const canMakeArithmeticProgression = (arr: number[]): boolean => {
  arr.sort((a, b) => a - b);
  const diff: number = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== diff) {
      return false;
    }
  }
  return true;
};

const testArr: number[] = [1, 2, 4];

const result = canMakeArithmeticProgression(testArr);
console.log(result);
