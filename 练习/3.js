var arr = [5,5,6,2,1,3];
var result = arr.reduce((pre,value,index) => {
    return pre + value;
},0)
console.log(result); 
