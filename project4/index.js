//Importación de express
// app.js
const path = require("path");
const express = require("express");
const forumRouter = require("./routers/forum");

//Creación de la aplicación express
const app = express();

// Configuración de EJS como motor de vistas
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Middleware para parsear datos de formularios
app.use(express.urlencoded({ extended: true }));

// Usar el router del foro
app.use("/", forumRouter);

//Puerto en el que correrá el servidor
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
