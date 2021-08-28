Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new Error('类型不对')
    }
    const _this = this;
    const args = [...arguments].slice(1);
    return function fn () {
        if (this instanceof fn) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}

// 下划线转驼峰
// my_bind  -->  myBind
function changeMethod (str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {
            str[i+1] = str[i+1].toUpperCase()
            console.log(str[i+1]);
        }
    }
    str = str.split('_').join('');
    return str;
}
console.log(changeMethod('my_bind'));
var ss = 'qqw'
console.log(ss[1].toUpperCase());