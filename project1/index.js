const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

const pages = ["index.html", "about.html", "contac.html"];

// Servir archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Ruta principal (redirige a index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Rutas para las páginas válidas
pages.forEach((page) => {
  app.get(`/${page}`, (req, res) => {
    res.sendFile(path.join(__dirname, page));
  });
});

// Ruta 404 para cualquier otra página
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
