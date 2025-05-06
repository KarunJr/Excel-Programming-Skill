// 1672. Richest Customer Wealth
/*
You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
*/

const maximumWealth = (accounts)=>{
    let sum = 0;
    let max = sum
    for (let i = 0; i < accounts.length; i++) {       
        sum = accounts[i].reduce((accum, curr)=> accum + curr, 0);
        if(sum > max){
            max = sum
        }
    }
    return max;
}
const accounts = [[1,5],[7,3],[3,5]]
const result = maximumWealth(accounts)
console.log(result);
