const http = require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');


const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), 'utf-8', (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.end(content);
      }
    });
  } else if (url === '/api') {
    fs.readFile(path.join(__dirname, 'public', 'db.json'), 'utf-8', (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.end(content);
      }
    });
  }  
  else if (url === '/style.css') {
    fs.readFile(path.join(__dirname, 'public', 'style.css'), 'utf-8', (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'text/css' });
        response.end(content);
      }
    });
  } else if (url === '/images/2.png') {
    fs.readFile(path.join(__dirname, 'public', 'images', '2.png'), (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.end(content);
      }
    });
  } else if (url === '/images/mike_flourish.JPG') {
    fs.readFile(path.join(__dirname, 'public', 'images', 'mike_flourish.jpg'), (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(content);
      }
    });
  } else if (url === '/images/1.png') {
    fs.readFile(path.join(__dirname, 'public', 'images', '1.png'), (error, content) => {
      if (error) {
        response.writeHead(500, { 'Content-Type': 'text/plain' });
        response.end(`An error occurred: ${error.message}`);
      } else {
        response.writeHead(200, { 'Content-Type': 'image/png' });
        response.end(content);
      }
    });
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.end('<h1>404 Nothing is Here</h1>');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  