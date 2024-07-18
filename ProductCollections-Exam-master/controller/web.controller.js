const Product = require("../model/product.model");

exports.product_get = async function(req, res) {
  try {
    let sortOption = {};
    if (req.query.sort === 'desc') {
      sortOption.productStoreCode = -1; // desc
    } else if (req.query.sort === 'asc') {
      sortOption.productStoreCode = 1; // asc
    }

      let list = await Product.find().sort(sortOption);;
      res.render('home', {
          products: list,
          sort: req.query.sort
      });
  } catch (error) {
      res.status(500).send(error);
  }
};


exports.form_new = async (req, res) => {
    res.render('new');
  };

exports.save_product = async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
      res.redirect('/');
    } catch (error) {
      res.status(400).send(error);
    }
  }  

  exports.delete_product = async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.redirect('/');
    } catch (error) {
      res.status(500).send(error);
    }
  };