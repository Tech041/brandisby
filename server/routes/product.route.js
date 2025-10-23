import { Router } from "express";
import { tenantSeparator } from "../middlewares/tenantSeparator.js";
import { productUpload } from "../controllers/product.js";
const productRouter = Router();
productRouter.post("/product-upload", tenantSeparator, productUpload);
export default productRouter;
