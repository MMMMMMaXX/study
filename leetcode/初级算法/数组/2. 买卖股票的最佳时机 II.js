/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let start = -1,
        sum = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < prices[i+1] && start === -1) {
            start = prices[i];
        } else if ((prices[i] >= prices[i+1] || i === prices.length - 1) && start !== -1) {
            sum += prices[i] - start;
            start = -1;
        }
    }
    return sum;
};
console.log(maxProfit([7,6,4,3,1]));