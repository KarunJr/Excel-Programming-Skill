// 1523. Count Odd Numbers in an Interval Range
/*
Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).
*/

const countOdds = function (low, high) {
    /*
    // This is correct but gives the error of Time Limit Excedded
    let count = 0;
    for (let i = low; i <= high; i++) {
        if( i % 2 === 1){
            count++
        }
    }
    return count
    */
    // Math.floor((high + 1) / 2):- This give the no. of odd from 1 to high
    // Math.floor(low / 2):- This give the no. of ood from 1 to (low - 1);
  const count = Math.floor((high + 1) / 2) - Math.floor(low / 2);
  return count
};

const low = 3;
const high = 7;

const result = countOdds(low, high);
console.log(result);
