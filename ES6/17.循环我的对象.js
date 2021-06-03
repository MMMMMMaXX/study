let list = [10,20,30];
let mystr = '你好啊';
let mymap = new Map();
mymap.set('JS','javascript');
mymap.set('PL','perl');
mymap.set('PY','python');

for(let val of list){
    console.log(val);
}

for(let val of mystr){
    console.log(val);
}

for(let [key,value] of mymap){
    console.log(key,value);
}

let it = mymap.values();
let tmp;
while(tmp = it.next()){
    // 迭代器的方法next();返回一个对象，
    // value:指向每一项，
    // done：boolean。(是否遍历完，完成过后值为true)
    if(tmp.done)
        break;
    console.log(tmp);
}