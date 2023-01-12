const productCLTN = require("./../../models/admin/product");
const UserCLTN = require("../../models/user/details");
const wishlistCLTN = require("../../models/user/wishlist");
const productListing = require('../../controllers/index/productListing')

exports.view = async (req, res) => {
  try {
    const currentUser = await UserCLTN.findById(req.session.userID);
    const productDetails = await productCLTN
      .findById(req.params.id)
      .populate("category");
    let productExistInWishlist = null;
    if (currentUser) {
      productExistInWishlist = await wishlistCLTN.findOne({
        customer: currentUser._id,
        products: req.params.id,
      });
    }
    res.render("index/product", {
      documentTitle: productDetails.name,
      productDetails,
      session: req.session.userID,
      currentUser,
      productExistInWishlist,
    });
  } catch (error) {
    console.log("Error rendering product page: " + error);
  }
};
