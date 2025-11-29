/* const http = require('http');
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
}); */


const express = require('express');
const path = require('path');
const app = express();

const PORT = 8080;



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'))
});

app.get('/contact-me', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'))
});

app.use((req,res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My first Express app - listening on port ${PORT}!`);
});