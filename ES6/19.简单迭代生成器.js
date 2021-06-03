//function *(){} 迭代生成器 可迭代方法
//yield 迭代返回
function *myGenerator(){
    yield '一';
    yield '条';
    yield '大';
    yield '河';
}
for(let val of myGenerator()){
    console.log(val);
}

function *countdown(begin){
    while(begin>0){
        yield begin--;
    }
}
for(let val of countdown(5)){
    console.log(val);
}