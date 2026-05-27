const express = require('express');
const router = express.Router();

const productRoutes = require('./product.route');

router.use('/product', productRoutes);

module.exports = router;