const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    productCode: String,
    productName: {
        type: String,

    },
    productDate: Date,
    productOriginPrice: {
        type: Number,
    },
    productStoreCode: {
        type: String,
    },
    quantity: Number
});
module.exports = mongoose.model("ProductCollection",product_schema);