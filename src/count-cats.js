module.exports = function countCats(matrix) {
  let count = 0;

  matrix.forEach(array => {
    array.forEach(elem => {
      if (elem === '^^') {
        count++;
      }
    });
  });

  return count;
};
