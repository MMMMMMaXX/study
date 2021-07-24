// @ts-nocheck
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let arr = [];
    let temp;
    let flag;
    for (let i in s) {
        switch (s[i]) {
            case '(':
            case '[':
            case '{':
                arr.push(s[i]);
                break;
            case ')':
                temp = arr.pop();
                if (temp !== '(') {
                    flag = 0;
                    return false;
                }
                break;
            case ']':
                temp = arr.pop();
                if (temp !== '[') {
                    flag = 0;
                    return false;
                }
                break;
            case '}':
                temp = arr.pop();
                if (temp !== '{') {
                    flag = 0;
                    return false;
                }
                break;
        }
    }
    if (arr.length !== 0) return false;
    return true;
};
console.log(isValid("([)]"));