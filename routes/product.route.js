const express = require('express');
const router = express.Router();
const controller = require('../controllers/product.controller');

router.post("/create",controller.create_product);
router.delete("/delete/:id",controller.delete_product);

module.exports = router;