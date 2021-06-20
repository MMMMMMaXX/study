//同18.
class MyList{
    constructor(list){
        this.list = list;
        // 迭代类
        //function *(){} 迭代生成器 可迭代方法
        this[Symbol.iterator] = function *(){
            let current = 0;
            let that = this;
            while(current < that.list.length){
                yield that.list[current++];
            }
        }
    }
}
let mylist = new MyList([100,200,300,400,500,600]);
for(let val of mylist){
    console.log(val);
}