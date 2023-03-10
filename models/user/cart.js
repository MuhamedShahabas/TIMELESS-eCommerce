const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "UserDetails",
  },
  totalPrice: Number,
  totalQuantity: Number,
  products: [
    {
      name: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
      quantity: { type: Number, default: 1, min: 1 },
      price: Number,
    },
  ],
});

const cartCLTN = mongoose.model("Cart", cartSchema);
module.exports = cartCLTN;
