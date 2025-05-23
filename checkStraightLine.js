// 1232. Check If It Is a Straight Line
/*
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
*/
// (y1 - y0) * (x2 - x0) === (y2 - y0) * (x1 - x0)
const checkStraightLine = function (coordinates) {
  const [x0, y0] = coordinates[0];
  const [x1, y1] = coordinates[1];

  for (let i = 2; i < coordinates.length; i++) {
    const [x2, y2] = coordinates[i];
    
    if ((y1 - y0) * (x2 - x0) !== (y2 - y0) * (x1 - x0)) {
      return false;
    }
  }

  return true;
};

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
const result = checkStraightLine(coordinates);
console.log(result);
