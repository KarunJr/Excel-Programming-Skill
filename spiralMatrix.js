// 54. Spiral Matrix
/*
Given an m x n matrix, return all elements of the matrix in spiral order.
*/

const spiralOrder = (matrix) => {
  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;
  const spiralArr = [];

  while (top <= bottom && left <= right) {
    // go right
    for (let i = left; i <= right; i++) {
      spiralArr.push(matrix[top][i]);
    }
    top++;
    
    // go down
    for (let i = top; i <= bottom; i++) {
      spiralArr.push(matrix[i][right]);
    }
    right--;

    // go left
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        spiralArr.push(matrix[bottom][i]);
      }
      bottom--;
    }

    // go up
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        spiralArr.push(matrix[i][left]);
      }
      left++;
    }
  }

  return spiralArr;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const result = spiralOrder(matrix);
console.log(result);
