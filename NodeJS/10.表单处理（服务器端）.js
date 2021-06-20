const http = require('http');

const fs = require('fs');
const ejs = require('ejs');
// 处理用户表单提交过来的数据
const qs = require('querystring');

var template = fs.readFileSync(__dirname + '/10.forum.ejs','utf-8');
var posts = [];

const server = http.createServer((req,res) => {
    if(req.method === 'POST'){
        // 表单提交
        req.data = "";
        // 监听可读事件
        req.on("readable",function(){
            // 表单数据收集
            var chr = req.read();
            // 数据流有值添加
            if(chr)
                req.data += chr;
            
        });
        req.on("end",function() {
            // 表单处理
            var query = qs.parse(req.data);
            // content对应表单name为content
            posts.push(query.content);
            showForm(posts,res);
        });
    }else{
        // 表单显示
        showForm(posts,res);
    }
});
const hostname = '127.0.0.1';
const port = 3000;
server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

function showForm(p_posts,res){
    var data = ejs.render(template,{
        title: 'hello ejs',
        posts: p_posts
    });
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.end(data);
}