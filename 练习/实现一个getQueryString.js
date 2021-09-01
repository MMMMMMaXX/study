function getQueryString(url, name) {
    let index = url.indexOf('?');
    console.log('?', index); // ? 30
    // 需要判断是否存在 ?
    if(index === -1){
      return undefined;
    }
    // 将 ? 后面的参数分割成 type=blog 这样的数组
    let paramsArr = url.substring(index + 1).split('&');
    console.log(paramsArr); // ["type=blog", "name=kaimo"]
    // 遍历 paramsArr 
    for(let i = 0; i < paramsArr.length; i++) {
      // 每个元素用 = 分割
      let paramsItem = paramsArr[i].split('=');
      // 找到 name 并返回值
      if(paramsItem[0] === name) {
        return paramsItem[1];
      }
    }
  }
  // 测试
  console.log(getQueryString('https://blog.csdn.net/kaimo313?type=blog&name=kaimo', 'name')); // kaimo
