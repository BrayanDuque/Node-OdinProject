//se implementa un servidor HTTP simple en Node.js
import { createServer } from "node:http";
// se crean las constantes para el servidor
const hostname = "127.0.0.1";
const port = 3000;

// se importa el modulo http y se crea un servidor
// que responde con "Hello World" a todas las peticiones

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World, soy tu servidor en Node.js");
});

// se inicia el servidor en el puerto y hostname especificados
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
