const Product = require("../models/product.model");

const createProduct = async (data) => {
    const {name, price,description, thumbnail,images,stock} = data;

    const newProduct = await Product.create({
        name: name.trim(),
        price,
        description,
        thumbnail,
        images,
        stock
    });
    return newProduct;
}
const updateProduct = async (data) => {}
const deleteProduct = async (id) => {}
const getProduct = async (id) => {}
module.exports = {createProduct, updateProduct, deleteProduct, getProduct}