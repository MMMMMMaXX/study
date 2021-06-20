var arr = [4,8,5,2,1,6,3,9,3,1,9,0,9,4,3];
var result = arr.sort((a,b) => {
    return Math.random() * 2 - 1;
});
console.log(result);
// 