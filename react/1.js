function ifBack(str) {
    return str === str.split('').reverse().join('');
}
var str = '1233321';
console.log(ifBack(str));

// [4,2,6] [7,4,1,8,9,2] 输出[1,7,7,8,9,2]

function addArr(arr1,arr2) {
    var flag = 0;
    var temp = 0;
    var arr = [];
    for(var i = 0; i < arr1.length || i < arr2.length; i++) {
        if(flag == 1){
            temp = 1;    
        } else {
            temp = 0;
        }
        flag = 0;
        if(i < arr1.length) {
            temp += arr1[i];
        }
        if(i < arr2.length) {
            temp += arr2[i];
        }    
        if(temp < 10) {
            arr.push(temp);
        } else {
            flag = 1;
            arr.push(temp-10);
        }
    } 
    return arr;
}
var arr1 = [4,2,6];
var arr2 = [7,4,1,8,9,2];
console.log(addArr(arr1,arr2));
