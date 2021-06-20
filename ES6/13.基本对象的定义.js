let title = "ES6";
let price = 25;
let publish = "出版社";

// 向book对象增加这三个属性
let book = {
    title,price,publish,
    toString(){
        console.log(`<<${this.title}>> is ${price}元`);
    }
};
book['lang'] = "简体中文";
book.title = 'hhh'


console.log(book);
book.toString();
console.log(title);