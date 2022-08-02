
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let index = [1, -1],
    sort = [];
    if (!matrix){
     return sort;
    } else {
  for (let i = 0; i < matrix.length; i++) {
    let arrLeng = matrix[i].length;
     let number = i % 2;
       for (let j = 0; j < arrLeng; j++) {
      let jj = number * (arrLeng-1) + j*index[number];
      sort.push(matrix[i][jj]);
    }
  }
}
  return sort;
};
