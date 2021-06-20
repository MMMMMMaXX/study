let list = [10,20,30]
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

// map() 方法按照原始数组元素顺序依次处理元素。

// 注意： map() 不会对空数组进行检测。

// 注意： map() 不会改变原始数组。
// ES5
let newList = list.map(function(value,index){
    return value*value;
})
console.log(newList);//[ 100, 400, 900 ]

// ES6
newList = list.map((value,index) => {
    return value*value;
});
console.log(newList);//[ 100, 400, 900 ]

newList = list.map(value => {
    return value*value;
});
console.log(newList);//[ 100, 400, 900 ]

newList = list.map(value => value*value
);
console.log(newList);//[ 100, 400, 900 ]