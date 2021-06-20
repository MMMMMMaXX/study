// ES6新增了新的原始数据类型Symbol
let str1 = String("HelloWorld");
let str2 = String("HelloWorld");
console.log(typeof str1); //string
console.log(str1);//HelloWorld
console.log(str1.toString()); //HelloWorld
console.log(str1 == str2);  //true
console.log(str1 === str2); //true

// symbol分布一个内部id，比较时比较id（hash）值
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
console.log(typeof s1); //symbol
console.log(s1);//Symbol(mySymbol)
console.log(s1.toString()); //Symbol(mySymbol)
console.log(s1 == s2);  //false
console.log(s1 === s2); //false