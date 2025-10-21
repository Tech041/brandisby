import { Schema } from "mongoose";
const orderSchema = new Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        product: { type: mongoose.Types.ObjectId, ref: "Product" },
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
    amount: { type: Number, required: true },
    address: { type: Object, required: true },
    payment_method: { type: String, required: true, default: "Paystack" },
    status: {
      type: String,
      enum: ["pending", "paid"],
      default: "pending",
    },

    date: {
      type: Date,
      default: Date.now,
    },
    shipping_status: {
      type: String,
      enum: ["packaged", "shipped", "delivered"],
      default: "packaged",
    },
    tenant: {
      type: mongoose.Types.ObjectId,
      ref: "Tenant",
      required: true,
    },
  },
  { timestamps: true }
);

orderSchema.index({ tenant: 1, userId: 1 });
const Order = mongoose.model("Order", orderSchema);
export default Order;
