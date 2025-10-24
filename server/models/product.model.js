import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // Cloudinary secure_url
    publicId: { type: String, required: true }, // Cloudinary public_id for deletion
    category: { type: String, required: true },
    quantity: { type: Number, required: true },
    discount: { type: Number, default: 0 },
    tenant: { type: String, required: true },
    inStock: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
