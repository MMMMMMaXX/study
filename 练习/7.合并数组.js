var getArr = function (arr1, arr2) {
    var arr = [];
    for (var i = 0, j = 0; i < arr1.length || j < arr2.length;) {
        if (i < arr1.length && arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        } else if (j < arr2.length) {
            arr.push(arr2[j]);
            j++;
        }
    }
    return arr;
}
var arr1 = [2, 5, 7, 88];
var arr2 = [1, 3, 3, 5, 77, 99];
console.log(getArr(arr1, arr2));