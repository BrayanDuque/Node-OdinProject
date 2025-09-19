//Importación de express
const express = require("express");
//Creación de la aplicación express
const app = express();
//Middleware para parsear JSON  
app.use(express.json());
//para recibir datos desde "postman", en este caso recibir datos en formato JSON
app.post("/", (req, res) => {
    res.send('Datos recibidos')
    console.log(req.body);
});

app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});