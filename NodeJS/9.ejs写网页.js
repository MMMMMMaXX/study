const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs');
const ejs = require('ejs');

var template = fs.readFileSync(__dirname + '/9.hello.ejs','utf-8');
const server = http.createServer((req,res) => {
    var data = ejs.render(template,{
        title: 'hello ejs',
        content: '<strong>big hello ejs.</strong>'
    });
    res.setHeader('Content-Type','text/html');
    res.statusCode = 200;
    res.end(data);
})
server.listen(port,hostname,() => {
    console.log(`Server running at http://${hostname}:${port}/`);
})