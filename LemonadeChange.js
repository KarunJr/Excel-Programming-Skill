// 860. Lemonade Change
/*
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
*/

var lemonadeChange = function (bills) {
  let countFive = 0;
  let countTen = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] == 5) {
      countFive++;
    } else if (bills[i] == 10) {
      if (countFive >= 1) {
        countFive--;
      } else {
        return false;
      }
      countTen++;
    } else if (bills[i] == 20) {
      if (countFive >= 1 && countTen >= 1) {
        countFive -= 1;
        countTen -= 1;
      } else if (countFive >= 3) {
        countFive -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};

const bills = [5, 5, 10, 10, 20];
const result = lemonadeChange(bills);
console.log(result);
