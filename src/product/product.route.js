const express = require("express");
const productController = require("./product.controller");
const productRouter = express.Router();

productRouter.get("/products", productController.getAllProducts);
productRouter.post("/products", productController.createProduct);
productRouter.delete("/products/:id", productController.deleteProduct);
productRouter.put("/products/:id", productController.updateProduct);

module.exports = productRouter;
