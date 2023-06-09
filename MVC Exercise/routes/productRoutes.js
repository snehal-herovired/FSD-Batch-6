const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController');

productRouter.post('/products/new', productController.addProduct);
productRouter.get('/products', productController.getProductList);
productRouter.get('/products/:id', productController.getProductById);
productRouter.get('/products/:category', productController.getProductByCategory);

module.exports = productRouter;
