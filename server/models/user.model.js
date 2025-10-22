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

const User = mongoose.model("User", userSchema);
export default User;
