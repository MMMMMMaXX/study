Function.prototype.myCall = function (context) {
    if (typeof context === "undefined" || context === null) {
        context = window
    }
    //context=context||window  和上面的代码一样
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}

Function.prototype.myApply = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    let result
    if (arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn()
    }
    delete context.fn
    return result
}

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
        throw new TypeError('Error')
    }
    //返回一个绑定this的函数，这里我们需要保存this
    const _this = this
    const args = [...arguments].slice(1)
    //返回一个函数
    return function F() {
        //因为返回一个函数，我们可以new F()需要判断能当做构造函数吗
        if (this instanceof F) {
            return new _this(...args, ...arguments)
        }
        return _this.apply(context, args.concat(...arguments))
    }
}
