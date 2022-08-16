
// You should implement your task here.

module.exports = function towelSort (matrix) {
  result = [];
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i++){
    if (i % 2 === 0){
      for (let j = 0; j < matrix[i].length; j++){
        result.push(matrix[i][j]);
      }
    }
    else {
      for (j = matrix[i].length - 1; j >= 0; j--){
        result.push(matrix[i][j]);
      }
    }
  }
  return result;
}

console.log(module.exports([[1, 2],  [3, 4]]));