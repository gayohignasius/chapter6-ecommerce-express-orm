const { Product } = require("../database/models");
const { Op } = require("sequelize");

// cari semua product
const getAllProducts = async () => {
  return await Product.findAll();
};

const getAllProductsByQuery = async (q) => {
  return await Product.findAll({
    where: {
      [Op.or]: {
        product_name: {
          [Op.substring]: q,
        },
        description: {
          [Op.substring]: q,
        },
      },
    },
  });
};

// cari product berdasar product_name
const getProductByName = async (productName) => {
  return await Product.findOne({
    where: { product_name: productName },
  });
};

// buat product baru
const createNewProduct = async (
  product_name,
  description,
  stock,
  availability
) => {
  return await Product.create({
    product_name,
    description,
    stock,
    availability,
  });
};

//hapus product
const deleteProduct = async (productId) => {
  return await Product.destroy({
    where: {
      id: productId,
    },
  });
};

//edit product
const updateProduct = async (
  productId,
  product_name,
  description,
  stock,
  availability
) => {
  return await Product.update(
    {
      product_name,
      description,
      stock,
      availability,
    },
    {
      where: {
        id: productId,
      },
      returning: true,
    }
  );
};

const productRepo = {
  getAllProducts,
  getAllProductsByQuery,
  getProductByName,
  createNewProduct,
  deleteProduct,
  updateProduct,
};

module.exports = productRepo;
