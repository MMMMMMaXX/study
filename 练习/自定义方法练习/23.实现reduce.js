// 放到原型链上
Array.prototype.myReduce=function(callback,initialValue){

    // 没有传入归并函数将报错
    if(typeof callback !=='function'){
        throw Error("请传入归并函数");
    }

    const array = this;

    // pre设置为initiValue,没有该参数就设置为0
    let pre = initialValue?initialValue:0;


    for(let i=0;i<array.length;i++){
        pre = callback(pre,array[i],i,array);
    }

    return pre;
}