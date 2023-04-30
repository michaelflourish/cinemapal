const http = require('http');
const path = require('path');
const fs = require('fs');
const {MongoClient, ServerApiVersion} = require('mongodb');


const server = http.createServer((request, response) => {
  const { method, url } = request;

  // Add CORS headers
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

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
    const {MongoClient} = require('mongodb');

    async function main() {
      const uri = "mongodb+srv://mike:Gigtak27071906@flourishcluster.ivwt2g1.mongodb.net/?retryWrites=true&w=majority";

      const client = new MongoClient(uri);
  
      try {
          await findAll(client);
          await client.connect();
      } finally{
          await client.close();
      }
    }

    main().catch(console.error);

    async function findAll(client) {
      const cursor = await client.db("Cinemapal").collection("movies").find({});
      const results = await cursor.toArray();
      console.log(results);

   
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify(results));
      response.end();

    }

  } else if (url === '/style.css') {
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
        response.writeHead(200, { 'Content-Type': 'image/jpg' });
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
    response.end('<h1>404 Not Found</h1>');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
