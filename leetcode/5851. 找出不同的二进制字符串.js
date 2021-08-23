/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function (nums) {
    var t = {};
    var nowN;
    var max = -1;
    for (let i = 0; i < nums.length; i++) {
        t[nums[i]] = 1;
        // if(nums[i].charCodeAt().toString(2))
    }
    // console.log('t',t);
    var strL = nums[0].length;
    var nowNL;
    // console.log('strL',strL);
    // console.log('pow',Math.pow(2,strL));
    for (let i = 0; i < Math.pow(2, strL); i++) {
        nowN = i.toString(2);
        // console.log('nowN',nowN);
        nowNL = nowN.length
        if (nowNL < strL) {
            for (let j = 0; j < strL - nowNL; j++) {
                nowN = "0" + nowN;
                // console.log('do',strL-nowNL);
            }
            // console.log('n',nowN);
        }
        if (t[nowN] !== 1) {
            return nowN;
        }
    }
};
console.log(findDifferentBinaryString(["111", "011", "001"]));
// console.log("11".charCodeAt());