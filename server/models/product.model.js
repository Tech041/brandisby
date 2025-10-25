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
productSchema.index({ tenant: 1 }); // Fast filtering by tenant
productSchema.index({ category: 1 }); // Useful for category-based browsing
productSchema.index({ name: 1 }); // Enables search by product name
productSchema.index({ price: 1 }); // Helps with sorting/filtering by price
productSchema.index({ inStock: 1 }); // Fast lookup for available items
productSchema.index({ tenant: 1, _id: 1 }); // Optimized for cart validation

const Product = mongoose.model("Product", productSchema);
export default Product;
