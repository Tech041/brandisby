import mongoose, { Schema } from "mongoose";

const tenantSchema = new Schema({
  brand: {
    type: String,
    required: true,
    default: null,
    unique: true,
  },

  logo: {
    type: String,
    required: true,
    unique: true,
  },

  about: {
    type: String,
    required: true,
    unique: true,
  },
  business_address: {
    type: String,
    required: true,
    unique: true,
  },
  business_type: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  country: {
    type: String,
    required: true,
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Tenant = mongoose.model("Tenant", tenantSchema);
export default Tenant;
