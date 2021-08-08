/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var numsObj1 = {};
    var numsObj2 = {};
    var res = [];
    for(var val in nums) {
        if(numsObj1[nums[val]]) {
            numsObj2[nums[val]] = val;
        } else {
            numsObj1[nums[val]] = val;
        }
    }
    // console.log(Math.min(...nums));
    // return {numsObj1,numsObj2};
    for(var i = 0; i < nums.length; i++) {
        if(numsObj1[nums[i]]) {
            if(numsObj1[target-nums[i]] && nums[i] != target-nums[i]){
                // 可转可不转
                res[0] = numsObj1[nums[i]];
                res[1] = parseInt(numsObj1[target-nums[i]]);
                // console.log(1);
            } else if (numsObj2[target-nums[i]]) {
                res[0] = parseInt(numsObj1[nums[i]]);
                res[1] = parseInt(numsObj2[target-nums[i]]);
                // console.log(2);
            }
        }
    }
    return res;

};
console.log(twoSum([0,0],0));

/*
js取最小最大值--Math.min()、Math.max()
Math.max(...arr)
js，string类型转number类型parseInt()
*/ 