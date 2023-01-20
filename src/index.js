
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  return matrix.reduce((acc, element, index) => {
    return [...acc, ...(index % 2 === 0 ? element : element.reverse())];
  }, []);
}
