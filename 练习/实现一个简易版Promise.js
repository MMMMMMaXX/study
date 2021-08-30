function promise() {
    this.status = 'pending' // 2.1
    this.msg = '' // 存储value与reason
    let process = arguments[0],
        that = this
    process(function () {
        that.status = 'resolve'
        that.msg = arguments[0]
    }, function () {
        that.status = 'reject'
        that.msg = arguments[0]
    })
    return this
}

promise.prototype.then = function () {
    if (this.status === 'resolve') {
        arguments[0](this.msg)
    } else if (this.status === 'reject' && arguments[1]) {
        arguments[1](this.msg)
    }
}