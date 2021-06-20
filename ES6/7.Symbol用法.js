// 1.作为常量
console.log("1.作为常量");
const Java = Symbol();
const Ruby = Symbol();
const Per1 = Symbol();
const Php = Symbol();
const VB = Symbol();

let lang = Ruby;

if(lang === Java){
    console.log('Java');
}
else if(lang === Ruby){
    console.log('Ruby');
}
// Ruby

// 2.作为属性
console.log("2.作为属性");
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");

let obj = {};
obj[s1] = "hello";
obj[s2] = "world";

console.log(obj);//{ [Symbol(mySymbol)]: 'hello', [Symbol(mySymbol)]: 'world' }
console.log(obj[s1]);//hello
console.log(obj[s2]);//world

// 3.半隐藏属性
console.log("3.半隐藏属性");
const MYKEY = Symbol();
class User{
    // 构造器
    constructor(key,name,age){
        // 隐藏属性
        this[MYKEY] = key;
        this.name = name;
        this.age = age;
    }
    checkKEY(key){
        return this[MYKEY] === key;
    }
}

let user = new User(123,'Curry',29);
console.log(user.name,user.age,user[MYKEY]);//Curry 29 123
console.log(user.checkKEY(123));    //true
console.log(user.checkKEY(456));    //false
//Object的方法
console.log(Object.keys(user));     //[ 'name', 'age' ]
// 对象转字符串
console.log(JSON.stringify(user));  //{"name":"Curry","age":29}
console.log(user);