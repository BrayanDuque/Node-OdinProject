const http = require("http");
const fs = require("fs");
const path = require("path");

const pages = ["index.html", "about.html", "contac.html", "404.html"];
const port = 3000;

const server = http.createServer((req, res) => {
  let requestedPage = req.url.slice(1); // remover la barra inicial

  if (requestedPage === "") {
    requestedPage = "index.html"; // página por default
  }
  
  if (pages.includes(requestedPage)) {
    const filePath = path.join(__dirname, requestedPage);
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error interno del servidor");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
      }
    });
  } else {
    // Página 404
    const filePath404 = path.join(__dirname, "404.html");
    fs.readFile(filePath404, (err, data) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      if (err) {
        res.end("<h1>404 - Página no encontrada</h1>");
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
