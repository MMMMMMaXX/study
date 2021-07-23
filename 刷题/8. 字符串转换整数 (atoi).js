/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let res = s.trim().match(/^(\-|\+)?\d+/g)
    return res ? Math.max(Math.min(Number(res[0]),2**31-1),-(2**31)) : 0
};
console.log(myAtoi("   -419a3 with words"));