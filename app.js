const http = require('http');
const url = require('url'); 
const querystring = require('querystring');
const config = require('./config');

const port = 8996;
const hostname = '127.0.0.1';

const start = () => {
    const server = http.createServer((req, res) => {
        const currentUrl = url.parse(req.url);
        const query = url.parse(req.url).query;
        if (url.pathname == '/favicon.ico') {
            return;
        }
        const content = JSON.stringify(config(currentUrl, querystring.parse(query)));
        //设置响应编码格式
        res.writeHead(200, { 'content-type': 'text/plain;charset=utf-8' });
        res.end(content);
    });
    server.listen(port, hostname, () => {
        console.log(`监听\nhttp://${hostname}:${port}`);
    });
}

module.exports = start;