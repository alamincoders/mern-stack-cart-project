const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
  },
  desc: {
    type: "string",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  imgUrl: {
    type: "string",
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
