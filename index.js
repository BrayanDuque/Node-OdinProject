//Importación de express
const express = require("express");
//Creación de la aplicación express
const app = express();
//Definición de una ruta para la raíz del sitio
app.get("/", (req, res) => res.send("Hello, seré una app full-stack!"));
//Iniciar el servidor en el puerto 3000
const PORT = process.env.PORT || 3000;
// Escuchar en el puerto definido
app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Mi app con express - escuchando el puerto ${PORT}!`);
});
