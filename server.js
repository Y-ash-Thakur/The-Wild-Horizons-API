import http from 'node:http';

const PORT = 8000;
const server = http.createServer((req, res) => {

  if (req.url === '/' && req.method === 'GET'){
    res.end('This is from the server');
  }

  })

  server.listen(PORT, () => console.log(`Server running on port: ${PORT}`));