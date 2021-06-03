const http = require('http');

// fs文件读写模块的引用 引用fs读取本地文件
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    fs.readFile(__dirname + '/7.index.html','utf-8',function(err,data){
        if(err){
            res.setHeader('Content-Type','text/plain');
            res.statusCode = 404;
            res.end('Not Found!');
        }else{
            res.setHeader('Content-Type','text/html');
            res.statusCode = 200;
            res.end(data);
        }
    });
});

server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
})