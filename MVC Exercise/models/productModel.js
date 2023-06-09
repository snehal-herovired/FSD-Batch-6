const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
        },

    total_qnty: {
        type: Number,
        required: true
        },

    category: {
        type: String,
        required: true
        },

    price: {
        type: Number,
        required: true
        }

    });

const productModel = mongoose.model('Product', ProductSchema);

module.exports = productModel;
