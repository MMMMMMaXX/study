// 数组赋值
let [a,b,c] = [10,20,30];
console.log(a,b,c); //10 20 30

let [x,y,...other] = [1,2,3,4,5]
console.log(x,y,other); //1 2 [ 3, 4, 5 ]

// 对象赋值
let {age,name} = {name:'Max',age:20};
console.log(name,age);  //Max 20

// 函数赋值
function func1(){
    return [10,20]
}
let [num1,num2] = func1();
console.log(num1,num2); //10 20

// 函数参数名指定
function func2({x=1,y=2}){
    return x+y
}
console.log(func2({}));             //3
console.log(func2({x:10}));         //12
console.log(func2({y:10}));         //11
console.log(func2({x:10,y:20}));    //30