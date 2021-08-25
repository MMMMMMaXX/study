/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var res = 0;
    var temp = [];
    for(var i = 0; i < s.length; i ++) {
        if(temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
            // console.log(temp);
        } else {
            temp.shift();
            // console.log(temp);
            i--;
            // continue;
        }
        res = Math.max(res, temp.length);
        console.log(temp, res);
    }
    return res;
};
console.log(lengthOfLongestSubstring('abcbcde'));
