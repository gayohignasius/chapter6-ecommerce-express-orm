const productRepo = require("./product.repository");

const getAllProducts = async (q) => {
  if (q) {
    return await productRepo.getAllProductsByQuery(q);
  } else return await productRepo.getAllProducts();
};

const createProduct = async (
  product_name,
  description,
  stock,
  availability
) => {
  const productExists = await productRepo.getProductByName(product_name);
  if (!productExists) {
    return await productRepo.createNewProduct(
      product_name,
      description,
      stock,
      availability
    );
  } else return "Product is already exist";
};

const deleteProduct = async (productId) => {
  return await productRepo.deleteProduct(productId);
};

const updateProduct = async (
  productId,
  product_name,
  description,
  stock,
  availability
) => {
  return await productRepo.updateProduct(
    productId,
    product_name,
    description,
    stock,
    availability
  );
};

const productService = {
  getAllProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};

module.exports = productService;
