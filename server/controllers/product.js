import Busboy from "busboy";
import sharp from "sharp";
import { v2 as cloudinary } from "cloudinary";
import streamifier from "streamifier";
import Product from "../models/product.model.js";
import { validateRequest } from "../middlewares/validator.js";
import { errorHandler } from "../utils/error.js";

export const productUpload = (req, res, next) => {
  const busboy = new Busboy({ headers: req.headers });
  const formData = {};
  let imageBuffer = null;

  busboy.on("field", (fieldname, val) => {
    formData[fieldname] = val;
  });

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    const chunks = [];
    file.on("data", (chunk) => chunks.push(chunk));
    file.on("end", () => {
      imageBuffer = Buffer.concat(chunks);
    });
  });

  busboy.on("finish", async () => {
    try {
      const parsedData = validateRequest.parse({
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
              folder: `products/${req.user.tenant}`,
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
        tenant: req.user.tenant,
      });

      await product.save();

      return res.status(201).json({
        message: "Product uploaded successfully",
        product,
      });
    } catch (error) {
      console.error("Upload error:", error);
      return next(errorHandler(400, "Error uploading product"));
    }
  });

  req.pipe(busboy);
};
