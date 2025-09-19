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

//Ruta con parámetro
app.get("/hola/:user", (req, res) => {
  const user = req.params.user;
  res.send(
    `Hola ${user}, bienvenido a mi primer servidor con Express`
  );
  console.log(user);
});
//ruta de suma de parametros, parseados de string a number con parseInt
app.get("/suma/:num1/:num2", (req, res) => {
    const {num1, num2} = req.params;
    const suma = parseInt(num1) + parseInt(num2);
    res.send(`La suma de ${num1} y ${num2} es ${suma}`);
})

//ejemplo de query params
app.get("/search", (req, res) => {
   if (req.query.a === 'el mundo de express') {
    res.send("Has encontrado el tesoro");
   }else{
    res.send("Sigue buscando");
   }
})

//Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log("Servidor escuchando en el puerto 3000");
});