import { Router } from "express";
import { tenantSeparator } from "../middlewares/tenantSeparator.js";
import {
  fetchProducts,
  productUpload,
} from "../controllers/product.controller.js";
const productRouter = Router();
productRouter.post("/product-upload", tenantSeparator, productUpload);
productRouter.get("/products", tenantSeparator, fetchProducts);

export default productRouter;
