import mongoose, { Schema } from "mongoose";

const transactionSchema = new Schema(
  {
    reference: {
      type: String,
      required: true,
      unique: true,
    },
    status: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    message: {
      type: String,
    },
    paid_by: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    orderId: {
      type: mongoose.Types.ObjectId,
      ref: "Order",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    tenant: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
transactionSchema.index({ tenant: 1, orderId: 1 });
const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
