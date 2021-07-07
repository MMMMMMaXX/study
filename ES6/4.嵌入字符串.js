let name='Max'
let mystyle1='你好，${name}！'
let mystyle2=`你好，${name}！再见。`

console.log(mystyle1);
console.log(mystyle2);

// 将模板解析拆分成格式和参数
function t(formats,...args) {
    console.log(formats);
    console.log(args);
}

t`你好，${name}！再见。`
console.log('1') 
console.log('1') 
console.log('1') 
console.log('1') 
console.log('1') 
console.log('1') console.log('1') 
console.log('1') 
console.log('1') 

console.log('1') 
console.log('1') 
console.log('1') 
console.log('1') 