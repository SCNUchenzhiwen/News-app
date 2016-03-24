var http = require('http');
http.createServer(function (req, res) {
    // ��ÿͻ��˵�Cookie
    var Cookies = {};
    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[ parts[ 0 ].trim() ] = ( parts[ 1 ] || '' ).trim();
    });
    console.log(Cookies)
    // ��ͻ�������һ��Cookie
    res.writeHead(200, {
        'Set-Cookie': 'myCookie=test',
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(8088);

console.log('Server running at http://127.0.0.1:8000/');