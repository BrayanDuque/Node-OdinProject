const express = require("express");
const { body, validationResult } = require("express-validator");
const router = express.Router();

// Array en memoria para los mensajes
const mensajes = [];

// Página principal del foro
router.get("/", (req, res) => {
  res.render("forum", { mensajes, errores: [] });
});

// Recibir nuevos mensajes con validación
router.post(
  "/mensaje",
  [
    body("usuario").trim().notEmpty().withMessage("El nombre es obligatorio"),
    body("texto")
      .trim()
      .notEmpty()
      .withMessage("El mensaje no puede estar vacío"),
  ],
  (req, res) => {
    const errores = validationResult(req);
    if (!errores.isEmpty()) {
      return res.render("forum", {
        mensajes,
        errores: errores.array(),
      });
    }
    const { usuario, texto } = req.body;
    mensajes.push({ usuario, texto, fecha: new Date().toLocaleString() });
    res.redirect("/");
  }
);

module.exports = router;
