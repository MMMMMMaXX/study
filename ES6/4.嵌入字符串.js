let name1='Max'
let mystyle1='你好，${name1}！'
let mystyle2=`你好，${name1}！再见。`

console.log(mystyle1);
console.log(mystyle2);

// 将模板解析拆分成格式和参数
function t(formats,...args) {
    console.log(formats);
    console.log(args);
}

t`你好，${name1}！再见。`
