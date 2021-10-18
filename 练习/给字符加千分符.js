// function test( str ) {
//     // write code here
//     var res = [];
//     var numTime = 1;
//     for(let i = str.length - 1; i >= 0; i--) {
//         res.push(str[i]);
//         if(numTime % 3 === 0 && i !== 0) {
//             res.push(',');
//         }
//         numTime++;
//     }
//     return res.reverse().join('');
// }
// console.log(test("123456789"));
// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
function f(str) {
    var res = [];
    var numTime = 1;
    for(let i = str.length - 1; i >= 0; i--) {
        res.push(str[i]);
        if(numTime % 3 === 0 && i !== 0) {
            res.push(',');
        }
        numTime++;
    }
    return res.reverse().join('');
}

console.log(f('10000000000'));