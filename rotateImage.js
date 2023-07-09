/* The code defines a function called `rotate` that takes in a matrix as an argument. The function
rotates the matrix 90 degrees clockwise and returns the rotated matrix. */
var rotate = function (matrix) {
  let result = [];
  for (let index = matrix.length - 1; index >= 0; index--) {
    const element = matrix[index];

    for (let j = 0; j < element.length; j++) {
      const element2 = element[j];
      if (result[j]) {
      } else {
        result[j] = [];
      }

      result[j][result[j].length] = element2;
    }
  }
  matrix = result;
  return result;
};

console.log(
  rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);


