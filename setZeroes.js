// 73. Set Matrix Zeroes
/*
Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.
*/

const setZeroes = (matrix) => {
  console.log(matrix);
  const zeroRows = [];
  const zeroCols = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] == 0) {
        zeroRows.push(i);
        zeroCols.push(j);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (zeroRows.includes(i) || zeroCols.includes(j)) {
        matrix[i][j] = 0;
      }
    }
  }
  console.log(zeroRows);
  console.log(zeroCols);
  return matrix;

  /*
  console.log("Matrix is:", matrix);
  const zeroRows = new Set();
  const zeroCols = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++)
      if (matrix[i][j] === 0) {
        zeroRows.add(i);
        zeroCols.add(j);
      }
  }
  
  for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[0].length; j++){
        if(zeroRows.has(i) || zeroCols.has(j)){
            matrix[i][j] = 0;
        }
    }
  }
 return matrix
  */
};
const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const result = setZeroes(matrix);
console.log(result);
/*
const arr = [1,2, 3, 4]
console.log(arr.includes(2));*/
