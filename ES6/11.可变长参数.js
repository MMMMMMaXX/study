// 定义函数时，可以将参数指定为可变数组
function sum(...args){
    let result = 0;
    args.forEach(val => {
        result += val;
    });
    return result;
}
console.log(sum(1,2,3));//6
console.log(sum(1,2,3,4,5,6,7,8,9,10));//55