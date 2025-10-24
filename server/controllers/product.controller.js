import busboy from "busboy"; // ✅ Correct import for modern Busboy
import sharp from "sharp";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import Product from "../models/product.model.js";
import { errorHandler } from "../utils/error.js";
import { serverProductSchema } from "../validators/product.js";
import { success } from "zod";

export const productUpload = (req, res, next) => {
  const bb = busboy({ headers: req.headers });
  const formData = {};
  let imageBuffer = null;

  bb.on("field", (fieldname, val) => {
    formData[fieldname] = val;
  });

  bb.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const chunks = [];
    file.on("data", (chunk) => chunks.push(chunk));
    file.on("end", () => {
      imageBuffer = Buffer.concat(chunks);
    });
  });

  bb.on("finish", async () => {
    try {
      const parsedData = serverProductSchema.parse({
        ...formData,
        price: Number(formData.price),
        quantity: Number(formData.quantity),
        discount: Number(formData.discount),
      });

      if (!imageBuffer) {
        return next(errorHandler(400, "Image is required"));
      }

      const webpBuffer = await sharp(imageBuffer)
        .webp({ quality: 80 })
        .toBuffer();

      const streamUpload = () =>
        new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            {
              folder: `products/${req.tenant}`,
              format: "webp",
            },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          streamifier.createReadStream(webpBuffer).pipe(stream);
        });

      const result = await streamUpload();

      const product = new Product({
        ...parsedData,
        image: result.secure_url,
        publicId: result.public_id,
        tenant: req.tenant,
      });

      await product.save();

      return res.status(201).json({
        success: true,
        message: "Product uploaded successfully",
        product,
      });
    } catch (error) {
      console.error("Upload error:", error);
      return next(errorHandler(500, "Internal server error"));
    }
  });

  req.pipe(bb);
};

// fetch products

export const fetchProducts = async (req, res, next) => {
  const tenantId = req.tenant;
  try {
    const allProducts = await Product.find({ tenant: tenantId });
    if (allProducts.length === 0) {
      return next(errorHandler(400), "No products under this tenant");
    }
    return res.status(200).json({
      success: true,
      message: "Products fetched",
      allProducts,
    });
  } catch (error) {
    next(errorHandler(500), "Internal server error");
  }
};
