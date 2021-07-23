/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var ifN = 1;
    if(x < 0) {
        ifN = -1;
        x = -x;
    }
    // 数字转字符串
    x = x + '';
    // 字符串转数字
    x = Number(x.split('').reverse().join(''));
    if(x > Math.pow(2, 31) - 1 || x < Math.pow(-2, 31)) {
        return 0;
    } else {
        return x * ifN;
    }
};
console.log(reverse(-91283472332));