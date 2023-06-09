const ProductModel = require('../models/productModel');

const addProduct = async (req, res) => {
    const { id, name, total_qnty, category, price } = req.body
    let productObj = {
        name: name,
        total_qnty: total_qnty,
        category: category,
        price: price
    }
    try {
        let data = await ProductModel(productObj).save();
    if (data) {
        return res.json({
            message:"data inserted succesfuylly"
        })
    }
    return res.json({
        message:"data not inserted"
    });
    } catch (error) {
        return res.json({
            message:"Error"
        });
    }
};

const getProductList = async (req, res) => {
    try {
      const products = await ProductModel.find();
      res.json(products);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };

const getProductById = async (req, res) => {
    try {
      
      const product = await ProductModel.findById(req.params.id);
      if (!product) {
        return res.json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };


  const getProductByCategory = async (req, res) => {
    try {
      const { category } = req.params;
      const product = await ProductModel.find({category: category});
      if (!product) {
        return res.json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
        return res.json({
            message:"Error"
        })
    }
  };

  module.exports = {addProduct, getProductList, getProductById, getProductByCategory};
