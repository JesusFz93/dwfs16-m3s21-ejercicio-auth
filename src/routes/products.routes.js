const { Router } = require("express");
const { validarJWT } = require("../middleware/jwt.middleware");

const {
  crearProducto,
  obtenerProductos,
} = require("../controllers/products.ctrl");

const router = Router();

router.get("/", obtenerProductos);
router.post("/", validarJWT, crearProducto);

module.exports = router;
