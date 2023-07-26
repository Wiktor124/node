const http = require('http');
const url = require('url');
const port = 3000;


const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);

  switch (pathname) {
    case '/':
      res.end('¡Bienvenido al servidor HTTP!');
      break;

    case '/about':
      res.end('Esta es la página de acerca de nosotros.');
      break;

    case '/contact':
      res.end('contact@example.com');
      break;

    default:
      res.statusCode = 404;
      res.end('Not Found');
      break;
  }
})

server.listen(port, (error) => {
  if (error) throw new Error('Algo trono!', error)

  console.log(`Server on port ${port}`);
})

