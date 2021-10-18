function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

const myPromiseAll = (arr) => {
    let result = [];
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            if (isPromise(arr[i])) {
                arr[i].then((data) => {
                    result[i] = data;
                    if (result.length === arr.length) {
                        resolve(result)
                    }
                }, reject)
            } else {
                result[i] = arr[i];
            }
        }
    })
}
let t1 = Promise.resolve(3);
let t2 = 1337;
let t3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
});
myPromiseAll([t1, t2, t3]).then(values => {
    console.log(values); // [3, 1337, "foo"] 
});
let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'one');
});
let p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'two');
});
let p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'three');
});
let p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, 'four');
});
let p5 = new Promise((resolve, reject) => {
    reject('reject');
});

myPromiseAll([p1, p2, p3, p4, p5]).then(values => {
    console.log(values);
}, reason => {
    console.log(reason);// reject
});
