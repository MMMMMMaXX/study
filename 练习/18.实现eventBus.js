/*
on 绑定

emit 触发

off 解绑
 

//存放事件
eventList = {
　　key:val
　　handle:[]
}
 

1对多
on(eventName,callback);
handle:-------N多个
1、判断事件名称是否存在

2、如果存在的情况下将cb存放在eventName这个数组当中

3、如果不存在创建key值为eventName val值为数组



1对多
emit(eventName,params);

当调用emit的时候获取到eventName这的值，对值判断，如果值不存在直接return
如果存在遍历这个值全局进行调用，然后将params传入这些函数

off(eventName,[callback])
当调用off的时候获取到eventName这的值，对值判断，如果值不存在直接return
如果存在判断callback是否存在 如果存在删除指定的函数
如果不存在将当前数组清空


*/

 
const EventList = {

}


const on = function (eventName, callback) {
    if (!EventList[eventName]) {
        EventList[eventName] = [];
    }

    EventList[eventName].push(callback);
}


const emit = function (eventName, params) {
    if (!EventList[eventName]) return;

    EventList[eventName].map((cb) => {
        cb(params)
    })
}


const off = function (eventName, callback) {
    if (!EventList[eventName]) return;

    if (callback) {
        let index = EventList[eventName].indexOf(callback);
        EventList[eventName].splice(index, 1);
    } else {
        EventList[eventName] = [];
    }
}

export default {
    $on: on,
    $emit: emit,
    $off: off
}