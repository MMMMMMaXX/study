/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    var l = 0;
    var r = height.length - 1;
    var max = 0;
    for(let i = 0; i < height.length; i ++) {
        // console.log(i+'...');
        let sum = Math.min(height[l],height[r]) * (r - l);
        max = Math.max(sum, max);
        // console.log(max);
        height[l] > height[r] ? r-- : l++;
    }
    return max;
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]));
