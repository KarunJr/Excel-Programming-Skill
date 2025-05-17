// 1491. Average Salary Excluding the Minimum and Maximum Salary
/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
*/

const average = function (salary) {
  salary.sort((a, b) => a - b);
  const trimmed = salary.slice(1, salary.length - 1)
  const sum = trimmed.reduce((accum, curr) => accum + curr, 0);
  const avg = sum / trimmed.length;
  return avg;
};
salary = [1000,2000,3000]
const result = average(salary);
console.log(result);
