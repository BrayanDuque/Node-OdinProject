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

// Para crear o utilizar variables de desarrollo, creamos en el archivo raiz un .env donde se encontraran todas las variables de entorno, agregamos .env al .gitignore para evitar de que se publiquen y si queremos utilizarlas lo que hacemos es llamar al alchivo require("dotenv").config(); para editar la variable, solo basta con hacerlos desde .env