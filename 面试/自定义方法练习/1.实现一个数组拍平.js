// 拍平数组（数组扁平化）
var arr = [1,2,[3,4,5,[6,7,8],9],10,[11,12]];

// 递归方法
function flatFn (arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            res = res.concat(flatFn(arr[i]));
        } else {
            res.push(arr[i]);
        }
    }
    return res;
}

// reduce方法
function flatReduce (arr) {
    res = arr.reduce((pre, val) => {
        return pre.concat(Array.isArray(val) ? flatReduce(val) : val)
    }, [])
}

// 拓展运算符方法
function flatEs6 (arr) {
    let res = [];
    let ifBack = true;
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            res.push(...arr[i]);
            ifBack = false;
        } else {
            res.push(arr[i]);
        }
    }
    if (ifBack) {
        return res;
    }
    return flatEs6(res);
}




console.log(flatEs6(arr));
