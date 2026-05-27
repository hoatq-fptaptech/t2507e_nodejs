const {createProduct} = require("../services/product.service");
const create_product = async (req, res) => {
    const product = await createProduct(req.body);
    res.status(201).json({
        success: true,
        message: 'Product Created',
        data: product
    });
}
const delete_product = async (req, res) => {
    
}

module.exports = {create_product, delete_product}