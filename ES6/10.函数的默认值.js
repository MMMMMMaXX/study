// 字符参数
function sayHello(name = "Curry"){
    console.log(`Hello, ${name}!`);
}
sayHello();//Hello, Curry!
sayHello('Max');//Hello, Max!

// 数值运算
function add({a=1,b=a}){
    return a+b;
}
console.log(add({}));//2
console.log(add({a:10}));//20
console.log(add({a:10,b:20}));//30

function add1(a=1,b=a){
    return a+b;
}
console.log(add1());//2
console.log(add1(10));//20
console.log(add1(10,20));//30

// 必须指定参数
function required(){
    throw new Error("参数未制定");
}
function sayBye(name = required()){
    console.log(`${name}, bye!`);//Max, bye!
}
sayBye('Max');
// sayBye();报错