const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;

    let filePath;

    if (pathname === '/') {
        filePath = './index.html';
    } else if (pathname === '/about') {
        filePath = './about.html';
    } else if (pathname === '/contact-me') {
        filePath = './contact-me.html';
    } else {
        filePath = './404.html';
        res.writeHead(404, {'Content-Type': 'text/html'});
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/html'});
            res.end('Server Error');
            return;
        }
        if (!res.headersSent) {
            res.writeHead(200, {'Content-Type': 'text/html'});
        }
        res.end(data);
    });
});

const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});