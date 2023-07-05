const http = require('http');
const port = 3000;

const server = http.createServer((req, res, next) => {
  res.write('Hello Node JS!')
  res.end();
})

server.listen(port, (error) => {
  if (error) throw new Error('Algo trono!', error)

  console.log(`Server on port ${port}`);
})