const http =require('http');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const server = http.createServer((req, res)=>{
     
    if( req.url ==='/'){
     
        fs.readFile(path.join(__dirname,'public','index.html'),
        (err, content)=>{

            if (err) throw err;
            res.writeHead(200,{ 'Content-type': 'text/html'});
            res.end(content);

        });


    }
    else if(req.url ==='/images/1.png'){

       
        fs.readFile(path.join(__dirname,'public/images','1.png'),
        (err, content)=>{
            if(err ) throw err;
            res.writeHead(200, { 'Content-type': 'image/png'});
            res.end(content);
        });



    }
    else if(req.url ==='/style.css'){

       
      fs.readFile(path.join(__dirname,'public','style.css'),
      (err, content)=>{
          if(err ) throw err;
          res.writeHead(200, { 'Content-type': 'text/css'});
          res.end(content);
      });



    }
    else if(req.url ==='/images/2.png'){

       
      fs.readFile(path.join(__dirname,'public/images','2.png'),
      (err, content)=>{
          if(err ) throw err;
          res.writeHead(200, { 'Content-type': 'image/png'})
          res.end(content)
      });

  }
  else if(req.url ==='/images/mike_flourish.jpg'){

       
    fs.readFile(path.join(__dirname,'public/images','mike_flourish.jpg'),
    (err, content)=>{
        if(err ) throw err;
        res.writeHead(200, { 'Content-type': 'image/png'})
        res.end(content)
    });

  }
    else{
        res.writeHead(404, { 'Content-type': 'text/html'})  
        res.end("<h1> 404 Nothing is Here </h1>")
    }

    try {
      fs.readFile(path.join(__dirname,'public','db.json'), 'utf-8', (err, content) => {
        if (err) {
          console.error(err);
          res.writeHead(500, { 'Content-type': 'text/plain' });
          res.end('Server error');
        } else {
          res.writeHead(200, { 'Content-type': 'application/json' });
          res.end(content);
        }
      });
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-type': 'text/plain' });
      res.end('Server error');
    }
    
});

server.listen(5959, ()=> console.log(" great our server is runnning"));