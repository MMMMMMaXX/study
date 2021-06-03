const http = require('http');

const config = require('./5.config').config;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World\n');
});
server.listen(config.port,config.hostname,() => {
    console.log(`Sever running at http://${config.hostname}:${config.port}/`);
});