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
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    items: [
      {
        name: String,
        quantity: Number,
        price: Number,
      },
    ],
  },
  { timestamps: true }
);

const Transaction = mongoose.model("Transaction", transactionSchema);
export default Transaction;
