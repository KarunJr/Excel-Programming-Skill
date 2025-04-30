// 1041. Robot Bounded In Circle
/*
On an infinite plane, a robot initially stands at (0, 0) and faces north. Note that:

The north direction is the positive direction of the y-axis.
The south direction is the negative direction of the y-axis.
The east direction is the positive direction of the x-axis.
The west direction is the negative direction of the x-axis.
The robot can receive one of three instructions:

"G": go straight 1 unit.
"L": turn 90 degrees to the left (i.e., anti-clockwise direction).
"R": turn 90 degrees to the right (i.e., clockwise direction).
The robot performs the instructions given in order, and repeats them forever.

Return true if and only if there exists a circle in the plane such that the robot never leaves the circle.
*/

const isRobotBounded = (instructions) => {
  const directions = [
    [0, 1], // 0: North
    [1, 0], // 1: East
    [0, -1], // 2: South
    [-1, 0], // 3: West
  ];
  let x = 0;
  let y = 0;
  let dir = 0; // initially North
  for (let i = 0; i < instructions.length; i++) {
    if (instructions[i] === "G") {
      x += directions[dir][0];
      y += directions[dir][1];
    } else if (instructions[i] === "L") {
      dir = (dir + 3) % 4;
    } else if (instructions[i] === "R") {
      dir = (dir + 1) % 4;
    }
  }
  console.log(x, y);
  console.log(dir);
  return (x === 0 && y === 0) || dir != 0;
};

const instructions = "GLRLLGLL";
const result = isRobotBounded(instructions);
console.log(result);
