/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function(nums) {
    let minN = 10000;
    let maxN = -1;
    var r;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]>maxN){
            maxN = nums[i];
        }
        if(nums[i]<minN){
            minN=nums[i];
        }
    }
    r = finGcd(maxN,minN);
    // console.log(maxN,minN);
    return r;
};
var finGcd = function(max,min){
    var r;
    if(min === 0){
        return max;
    }
    r = parseInt(max%min);
    return finGcd(min,r)
}
console.log(findGCD([2,5,6,9,10]));