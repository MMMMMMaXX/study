/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 0;
    for (let i = 1; i < nums.length; i++ ) {
        if (nums[i] !== nums[j]) {
            j++;
            nums[j] = nums[i];
        }
    }
    return j + 1;
};
let nums = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(nums));