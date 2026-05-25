const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a valid name'],
            trim: true,
        },
        price: {
            type: Number,
            required: [true, 'Please enter a valid price'],
            min: 0
        },
        description: {
            type: String,
            default: ''
        },
        thumbnail: String,
        images:[{type:String}],
        stock:{
            type: Number,
            required: [true, 'Please enter a valid stock'],
            default: 0,
            min: 0
        }
    }
);
module.exports = mongoose.model('Product', productSchema);