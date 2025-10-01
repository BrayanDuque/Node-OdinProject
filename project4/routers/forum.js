const express = require("express");
const router = express.Router();

// Array en memoria para los mensajes
const mensajes = [];

// Página principal del foro
router.get("/", (req, res) => {
  res.render("forum", { mensajes });
});

// Recibir nuevos mensajes
router.post("/mensaje", (req, res) => {
  const { usuario, texto } = req.body;
  if (usuario && texto) {
    mensajes.push({ usuario, texto, fecha: new Date().toLocaleString() });
  }
  res.redirect("/");
});

module.exports = router;
