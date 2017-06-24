const sum = require('./sum');

// http://onlinestatbook.com/2/describing_bivariate_data/calculation.html
module.exports = correlation;
function correlation (arrX, arrY) {
  // TODO: validate types
  if (arrX.length !== arrY.length) {
    throw 'The arrays for the x and y data must be of the same length.'
  }

  // Find average of each arrX and arrY.
  const avgX = sum(arrX)/arrX.length;
  const avgY = sum(arrY)/arrY.length;

  const deviationScoresX = arrX.map(v => v - avgX);
  const deviationScoresY = arrY.map(v => v - avgY);

  const combinedDeviationScores = deviationScoresX.map((v, i) => v * deviationScoresY[i]);

  const sumCombinedDeviationScores = sum(combinedDeviationScores);

  const sumSquaresDeviationScoresX = deviationScoresX.reduce((acc, cur) => sum(acc, Math.pow(cur, 2)), 0);
  const sumSquaresYDeviationScoresY = deviationScoresY.reduce((acc, cur) => sum(acc, Math.pow(cur, 2)), 0);

  const squareRootOfCombinedSumSquares = Math.sqrt(sumSquaresDeviationScoresX * sumSquaresYDeviationScoresY);

  return sumCombinedDeviationScores / squareRootOfCombinedSumSquares;

}