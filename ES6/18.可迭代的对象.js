class Player{
    constructor(list){
        this.list = list;
    }
    // 迭代器
    [Symbol.iterator](){
        let current = 0;
        // this在不同作用域代表内容不同，函数里this会发送变化，想获得对象的this要在函数外把this赋为that
        let that = this;
        return{
            next(){
                // 迭代器的方法next();返回一个对象，
                // value:指向每一项，
                // done：boolean。(是否遍历完，完成过后值为true)
                return current < that.list.length ? {value:that.list[current++],done:false} : {done:true};
            }
        };
    }
}

let player = new Player(['Curry','Harden','LeBron']);
for(let tmp of player){
    console.log(tmp);
}