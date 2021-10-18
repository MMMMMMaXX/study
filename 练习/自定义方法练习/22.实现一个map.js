function map(arr,mapCallBack){
    //检查传入的参数是否正确(第一个参数是否是数组,数组长度不为0,第二个参数是否是function)
    if(!Array.isArray(arr)||!arr.length||typeof mapCallBack!=='function')
    {
        return []
    }else{
        let result=[];
        //对每个元素执行传入的方法后将结果返回出去
        for(let i=0,len=arr.length;i<len;i++){
            result.push(mapCallBack(arr[i]))
        }
        return result;
    }
}
