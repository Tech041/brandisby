import mongoose, { Schema } from "mongoose";

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
    },
    userCart: {
      type: Object,
      default: {},
    },
    tenant: {
      type: String,
      default: null,
    },
    refresh_token: {
      type: String,
      default: null,
    },
  },
  { minimize: false }
);

userSchema.index({ _id: 1, tenant: 1 });
const User = mongoose.model("User", userSchema);
export default User;
