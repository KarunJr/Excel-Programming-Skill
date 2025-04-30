// 657. Robot Return to Origin
/*
There is a robot starting at the position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

You are given a string moves that represents the move sequence of the robot where moves[i] represents its ith move. Valid moves are 'R' (right), 'L' (left), 'U' (up), and 'D' (down).

Return true if the robot returns to the origin after it finishes all of its moves, or false otherwise.

Note: The way that the robot is "facing" is irrelevant. 'R' will always make the robot move to the right once, 'L' will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.
*/

const judgeCircle = (moves) => {
    /*
  let countR = 0;
  let countL = 0;
  let countU = 0;
  let countD = 0;
  
  for (let i = 0; i < moves.length; i++) {
    if (moves.charAt(i) === "R") {
      countR++
    } else if (moves.charAt(i) === "L") {
      countL++
    } else if (moves.charAt(i) === "U") {
      countU++
    } else if (moves.charAt(i) === "D") {
      countD++
    }
  }
  console.log("Right:", countR);
  console.log("Left:", countL);
  console.log("Up:", countU);
  console.log("Down:", countD);

  if(countR === countL && countU === countD){
    return true
  }

  else return false*/

  let x = 0;
  let y = 0;
  for (let move of moves) {
    switch(move){
        case "D": y--; break;
        case "U": y++; break;
        case "R": x++; break;
        case "L": x--; break;
    }    
  }
  return x === 0 && y === 0;
};

const moves = "LDRRLRUULRLD";
const result = judgeCircle(moves)
console.log(result);