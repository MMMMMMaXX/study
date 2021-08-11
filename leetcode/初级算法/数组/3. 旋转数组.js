/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
    let j = 0
    for(let i = nums.length - k; i < nums.length; i++) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
        j++;
    }
    return nums;
};
console.log(rotate([1,2,3,4,5,6,7], 3));