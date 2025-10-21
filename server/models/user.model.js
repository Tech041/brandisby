import mongoose, { Schema } from "mongoose";
import { string } from "zod";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["admin", "seller", "user"],
      default: "user",
      required: true,
    },
    userCart: {
      type: Object,
      default: {},
    },
    tenant: {
      type: mongoose.Schema.ObjectId,
      ref: "Tenant",
      default: null,
    },
    refresh_token: {
      type: string,
      default: null,
    },
  },
  { minimize: false }
);

const User = mongoose.model("User", userSchema);
export default User;
