let list = [10,20,30];
// prototype 属性向对象添加属性和方法。
// 语法object.prototype.name=value
Array.prototype.Len = function(){}

// for...of 只关心数组里的值
for(let val of list)
    console.log(val);

for(let val in list)
    console.log(val,list[val]);