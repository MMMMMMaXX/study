// require 引用系统包、系统模块、第三方模块的命令
// 类似import、include
const http = require('http');

const hostip = '127.0.0.1';
const port = 3000;//大于1024

// req接收参数,res返回结果给用户端
const server = http.createServer((req,res) => {
    res.statusCode = 200;//200表示状态请求成功
    // 设置头信息
    res.setHeader('Content-Type','text/plain');
    res.end('Hello Node.js World\n');
});
// 监听事件（方法） post端口 hostname主机
server.listen(port,hostip,() => {
    console.log(`server running at http://${hostip}:${port}/`);
});