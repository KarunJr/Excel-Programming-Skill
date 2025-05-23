// ChatGPT Question
/*
You're given two non-negative integers as strings a and b. Return their sum as a string.
*/

const addStringNumber = (a, b) => {
  let i = a.length - 1;
  let j = b.length - 1;

  let result = "";
  let carry = 0;
  let sum = 0;

  while (i >= 0 || j >= 0 || carry) {
    let bitA = i >= 0 ? Number(a[i]) : 0;
    let bitB = j >= 0 ? Number(b[j]) : 0;

    sum = bitA + bitB + carry;

    result = (sum % 10) + result;
    carry = Math.floor(sum / 10)
    i--;
    j--;
  }
  return result
};

const a = "999";
const b = "1";
const result = addStringNumber(a, b);
console.log(result);
