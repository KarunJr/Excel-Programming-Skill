// 1275. Find Winner on a Tic Tac Toe Game
/*
Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares ' '.
The first player A always places 'X' characters, while the second player B always places 'O' characters.
'X' and 'O' characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return "Draw". If there are still movements to play return "Pending".

You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.
*/

const tictactoe = (moves) => {
  const rows = 3;
  const column = 3;
  const board = Array.from({ length: rows }, () => new Array(column).fill(""));
  for (let i = 0; i < moves.length; i++) {
    // const row = moves[i][0];
    // const column = moves[i][1];
    const [row, column] = moves[i]
    const player = i % 2 === 0 ? "X" : "0";
    board[row][column] = player;
  }
  console.log(board);
  for (let i = 0; i < 3; i++) {
    
    // Check row
    if (
      board[i][0] !== "" &&
      board[i][0] === board[i][1] &&
      board[i][1] === board[i][2]
    ) {
      const winner = board[i][0];
      return winner === "X" ? "A" : "B";
    }

    // Check column
    if (
      board[0][i] !== "" &&
      board[0][i] === board[1][i] &&
      board[1][i] === board[2][i]
    ) {
      const winner = board[0][i];
      return winner === "X" ? "A" : "B";
    }
  }

  // First diagonal
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    const winner = board[0][0];
    return winner === "X" ? "A" : "B";
  }

  // Second diagonal
  if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    const winner = board[0][2];
    return winner === "X" ? "A" : "B";
  }

  if(moves.length === 9){
    return "Draw"
  }else{
    return "Pending"
  }
};

const moves = [
  [0, 0],
  [1, 1],
  [0, 1],
  [0, 2],
  [1, 0],
  [2, 0],
];
const result = tictactoe(moves);
console.log(result);

/*
  //For Row
  if (
    board[0][0] !== "" &&
    board[0][0] === board[0][1] &&
    board[0][1] === board[0][2]
  ) {
    return board[0][0];
  } else if (
    board[1][0] !== "" &&
    board[1][0] === board[1][1] &&
    board[1][1] === board[1][2]
  ) {
    return board[1][0];
  } else if (
    board[2][0] !== "" &&
    board[2][0] === board[2][1] &&
    board[2][1] === board[2][2]
  ) {
    return board[2][0];
  }

  //For Column
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][0] &&
    board[1][0] === board[2][0]
  ) {
    return board[0][0];
  } else if (
    board[0][1] !== "" &&
    board[0][1] === board[1][1] &&
    board[1][1] === board[2][1]
  ) {
    return board[0][1];
  } else if (
    board[0][2] !== "" &&
    board[0][2] === board[1][2] &&
    board[1][2] === board[2][2]
  ) {
    return board[0][2];
  }

  //For Diagonal
  if (
    board[0][0] !== "" &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  ) {
    return board[0][0];
  } else if (
    board[0][2] !== "" &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  ) {
    return board[0][2];
  }
*/
