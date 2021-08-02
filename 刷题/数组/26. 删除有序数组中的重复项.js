/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let R = 0 ,L = 0
    while(R < nums.length){
        if(nums[R] != nums[L]){
            L++
            nums[L] = nums[R]
        }
        R++
    }
    return L+1
};
console.log(removeDuplicates([0,0,0,1,1,1,1,1,1,2,2,2,2]));