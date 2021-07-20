function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let flag = arr[0];
    let left = [];
    let right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > flag) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat(flag, quickSort(right));
}
var arr = [4, 6, 1, 2, 9, 1]
console.log(quickSort(arr));

/* function quickSort(arr){
    if(arr.length<=1){
        return arr
    }

    let temp = arr[0];
    let left = [];
    let right = [];
    for(var i=1;i<arr.length;i++){
        if(arr[i]<temp){
            left.push(arr[i])
        }else if(arr[i]>=temp){
            right.push(arr[i])
        }
    }
    return quickSort(left).concat(temp,quickSort(right))

}

var arr=[5,3,9,4,2,0]
console.log(quickSort(arr)) */