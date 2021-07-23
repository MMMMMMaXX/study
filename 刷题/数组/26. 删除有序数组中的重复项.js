/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let doNum = undefined;
    let doLength = 1;
    let doStart = 0;
    for (let i = 0; i < nums.length; i ++) {
        if(!doNum) {
            doNum = nums[i];
            doStart = i;
        } else if(nums[i] === doNum) {
            doLength ++;
        } else {
            console.log(doNum,doLength,doStart);
            nums.splice(doStart,doLength,doNum);
            i = i - doLength + 1;
            doNum = undefined;
            doLength = 1;
            doStart = 0;
        }
    }
    return nums;
};
console.log(removeDuplicates([1,1,2]));