// 拍平数组（数组扁平化）
var arr = [1,2,[3,4,5,[6,[7,[7]],8],9],10,[11,12]];

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
    return arr.reduce((pre, val) => {
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

// toString
function flatToString (arr) {
    return arr.toString().split(',').map((val) => {
        return Number(val)
    });
}

// apply
function flatApply (arr) {
    // while(arr.some(item => Array.isArray(item))){
    //     arr =  [].concat.apply([],arr);
    // }
    // return arr;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            arr = [].concat.apply([], arr);
        }
    }
    return arr;
}


console.log('flat', arr.flat(Infinity));
console.log('flatFn', flatFn(arr));
console.log('flatReduce', flatReduce(arr));
console.log('flatEs6', flatEs6(arr));
console.log('flatToString', flatToString(arr));
console.log('flatApply', flatApply(arr));
console.log('arr', arr);
console.log([].concat.apply([], [[4,6],[7,[8,9,0]]]));