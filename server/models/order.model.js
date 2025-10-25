import mongoose, { Schema } from "mongoose";
const orderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  tenant: String,
  items: [
    {
      productId: mongoose.Schema.Types.ObjectId,
      name: String,
      price: Number,
      quantity: Number,
    },
  ],
  shippingForm: {
    name: String,
    email: String,
    address: String,
    city: String,
    state: String,
    country: String,
  },
  message: String,
  reference: String,
  total: Number,
  status: { type: String, default: "pending" },
});

const Order = mongoose.model("Order", orderSchema);
export default Order;
