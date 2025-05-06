// 1572. Matrix Diagonal Sum
/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

const diagonalSum = (mat)=>{
    let sum = 0;
    let n = mat.length;
    if(n % 2 == 1){
        sum -= mat[Math.floor(n / 2)][Math.floor(n / 2)]
    }
    for(let i = 0; i < mat.length; i++){
        sum += mat[i][i]
        sum += mat[i][n - 1 - i]               
    }
    return sum
}

const mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const result = diagonalSum(mat);
console.log(result);
