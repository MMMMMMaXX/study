/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
    // console.log(matrix);
    let sum = 0n;
    let fuNum = 0;
    let haveZero = 0;
    let minNum = 10000n;
    let temp = 0n;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            if (matrix[i][j] < 0) {
                fuNum++;
                matrix[i][j] = matrix[i][j] * -1;
            }
            if (matrix[i][j] < minNum) {
                minNum = BigInt(matrix[i][j]);
            }
            if (matrix[i][j] === 0) {
                haveZero = 1;
            }
            temp = BigInt(matrix[i][j]);
            sum = sum + temp;
            // console.log(matrix[i][j]);
        }
    }
    if (haveZero === 1) {
        return sum;
    }
    if (fuNum % 2 !== 0) {
        sum = sum - minNum * 2n;
    }
    return sum.toString();
};
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]));