const router = require("express").Router();
const Product = require("../models/Product");

router.post("/add", async (req, res) => {
  try {
    console.log(req.body.title);

    const newproduct = new Product(req.body);
    // const newproduct = new Product({
    //   title: req.body.title,
    //   desc: req.body.desc,
    //   price: req.body.price,
    //   offprice: req.body.offprice,
    //   sortdesc: req.body.sortdesc,
    //   cat: req.body.cat,
    //   ratings: req.body.ratings,
    //   sku: req.body.sku,
    //   image: req.body.image,
    // });

    const product = await newproduct.save();

    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
});

module.exports = router;
