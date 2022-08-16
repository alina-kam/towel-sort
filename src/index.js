
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i++){
    for (let j =0; j < matrix[i].length; j++){
      let column = (i % 2 == 0) ? j : matrix[i].length - 1 - j;
      result.push(matrix[i][column]);
    }
  }
  return result;
}

console.log(module.exports([[1, 2],  [3, 4]]));