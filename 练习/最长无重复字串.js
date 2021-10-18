/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let max = 0;
    let res = '';
    let temp = [];
    for(let i = 0; i < s.length; i++) {
        if(temp.indexOf(s[i]) === -1) {
            temp.push(s[i]);
        } else {
            temp.shift();
            i--;
        }
        if(temp.length > max) {
            max = temp.length;
            res = temp.join('');
        }
    }
    return res;
};
console.log(lengthOfLongestSubstring('wertyrttyt'));
