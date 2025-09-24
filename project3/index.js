//Importación de express
const express = require("express");
//Creación de la aplicación express
const app = express();
//Importación de morgan
const morgan = require("morgan");
//Uso de morgan para el registro de solicitudes HTTP
app.use(morgan("dev"));
app.use(express.json());
const productos = [];

app.get("/products", (req, res) => {
  res.json(productos);
});
app.post("/products", (req, res) => {
    // Crear un nuevo producto con un ID único
  const newProduct= {...req.body, id:productos.length + 1};
  // Agregar el nuevo producto al array de productos
  productos.push(newProduct);
    // Devolver el nuevo producto como respuesta json
  res.json(newProduct);
});
app.put("/products", (req, res) => {
  res.send("actualizando productos");
});
app.delete("/products", (req, res) => {
  res.send("eliminando productos");
});
app.get("/products/:id", (req, res) => {
    // Obtener el ID del producto desde los parámetros de la URL
    const { id } = req.params;
    // Buscar el producto en el array por su ID, convirtiendo el ID a número
    const product = productos.find(p => p.id === parseInt(id));
    // Si se encuentra el producto, devolverlo como JSON, de lo contrario devolver un error 404
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Producto no encontrado" });
    }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
