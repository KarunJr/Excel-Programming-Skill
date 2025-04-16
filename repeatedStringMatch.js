// 686. Repeated String Match
/*
Given two strings a and b, return the minimum number of times you should repeat string a so that b is a substring of the repeated string. If it is impossible, return -1.
*/

const repeatedStringMatch = (a, b) => {
  let count = 1;
  let repeated = a;
  while (repeated.length < a.length + b.length) {
    if (repeated.includes(b)) {
      return count;
    }

    repeated += a;
    count++;
  }
  return repeated.includes(b) ? count : -1;
};

const a = "abcd";
const b = "cdabcdab";

const result = repeatedStringMatch(a, b);
console.log(result);
