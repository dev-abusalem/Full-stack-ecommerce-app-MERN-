const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    desc: {
      type: String,
    },
    price: {
      type: Number,
    },
    offprice: {
      type: Number,
    },
    sortdesc: {
      type: String,
    },
    cat: {
      type: String,
      default: "Uncategory",
    },
    ratings: {
      type: String,
    },
    sku: {
      type: String,
    },
    image: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", ProductSchema);
