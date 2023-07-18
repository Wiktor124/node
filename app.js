const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const { STATUS_CODES } = http;
const port = 3000;


const hello = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style> 
    body {
      background-color: green;
    }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  
</body>
</html>
`

const root = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style> 
    body {
      background-color: red;
    }
  </style>
</head>
<body>
  <h1>Hello World!</h1>
  
</body>
</html>
`


const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html')

  if(req.method !== 'GET') {
    res.statusCode = 405;
    res.end(STATUS_CODES[res.statusCode] + '\r\n');
    return
  } 

  const { pathname } = url.parse(req.url);

  if(pathname === '/') {
    res.end(root)
    return
  }

  if(pathname.includes('/images')) {
    const filePath = path.join(__dirname, req.url);

    fs.readFile(filePath, (err, data) => {
      if(err) {
        res.statusCode = 404;
        res.end("The image didn't found!")
      } else {
        const  extname = path.extname(filePath);
        const contentType = getContentType(extname);

        res.setHeader('Content-type', contentType);
        res.end(data)
      }
    })

    return
  }

  if(pathname === '/hello') {
    res.end(hello)
    return
  }
  
  res.statusCode = 404;
  res.end(STATUS_CODES[res.statusCode] + '\r\n');
})

server.listen(port, (error) => {
  if (error) throw new Error('Algo trono!', error)

  console.log(`Server on port ${port}`);
})

function getContentType(extname) {
  switch(extname) {
    case '.jpg':
      console.log(extname);
    case '.jpeg':
      return 'image/jpeg'
    case '.png':
      return 'image/png'
    
      
  }
}