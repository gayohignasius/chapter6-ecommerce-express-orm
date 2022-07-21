const productService = require("./product.service");

const getAllProducts = async (req, res) => {
  try {
    const { q } = req.query;
    const products = await productService.getAllProducts(q);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

const createProduct = async (req, res) => {
  try {
    const { product_name, description, stock, availability } = req.body;
    const newProduct = await productService.createProduct(
      product_name,
      description,
      stock,
      availability
    );
    if (product_name == "" || product_name == null)
      res.status(400).json("Product Name field must be filled!");
    else res.status(200).json(newProduct);
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteProduct = await productService.deleteProduct(id);
    res.status(200).json(deleteProduct);
  } catch (error) {
    res.status(500).json("Cannot delete the data!");
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { product_name, description, stock, availability } = req.body;
    const updateProduct = await productService.updateProduct(
      id,
      product_name,
      description,
      stock,
      availability
    );
    res.status(200).json(updateProduct);
  } catch (error) {
    console.log(error);
    res.status(500).json("Cannot update the data!");
  }
};

const productController = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};

module.exports = productController;
