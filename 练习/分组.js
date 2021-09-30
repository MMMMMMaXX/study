function doByFirst (arr) {
    if (!arr) return null;
    const res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            if (res[arr[i][0]]) {
                res[arr[i][0]].push(arr[i]);
            } else {
                res[arr[i][0]] = [];
                res[arr[i][0]].push(arr[i]);
            }
        }
    }
    return res;
}
const a = ['apple', 'ant', '', 'banner', 'bag', 'cat', null, 'car','cc'];
console.log(doByFirst(a));