const express = require("express");
const products = require("../models/index")
const router = express.Router();
const productController = require("../Controller/productController")

router.post("/product", productController.addproduct);

//router.route('/products').get(productController.get);

router.route('/products/:productId').get(productController.getSingleProduct);

router.route('/showProducts').get(productController.showProduct);

router.route('/products/:productId').put(productController.changeProduct);

router.route('/products/:productId').delete(productController.deleteProduct);

module.exports = router;