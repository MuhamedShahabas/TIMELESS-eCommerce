const express = require("express");
const { default: mongoose } = require("mongoose");
const router = express.Router();
const objectIdCheck = require("../middlewares/user/objectIdCheck");
const landingPage = require("../controllers/index/landingPage");
const product = require("./../controllers/index/product");
const productListing = require("../controllers/index/productListing");

router.get("/", landingPage.viewAll);

router
  .route("/products")
  .get(productListing.ourCollection)
  .patch(productListing.current)
  .put(productListing.search);

router.get("/categories/:id", productListing.categories);

router
  .route("/products/:id")
  .get(objectIdCheck, product.view)
  .patch(objectIdCheck, product.listedCheck);

module.exports = router;
