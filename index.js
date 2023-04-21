const http = require('http');
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
    } else if(req.url ==='/api'){

      fs.readFile(path.join(__dirname,'public','db.json'), 'utf-8',
      (err, content) => {
          if(err) throw err;
          res.setHeader("Access-Control-Allow-Origin", "*");
          res.writeHead(200, { 'Content-type': 'application/json'});
          res.end(content);
      });
  }
    else if(req.url ==='/style.css'){
      //styles
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
        res.writeHead(200, { 'Content-type': 'image/jpg'})
        res.end(content)
    });

  } else if(req.url ==='/images/1.png'){

       
    fs.readFile(path.join(__dirname,'public/images','1.png'),
    (err, content)=>{
        if(err ) throw err;
        res.writeHead(200, { 'Content-type': 'image/png'});
        res.end(content);
    });
  } else{
        res.writeHead(404, { 'Content-type': 'text/html'})  
        res.end("<h1> 404 Nothing is Here </h1>")
    }
}); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
  