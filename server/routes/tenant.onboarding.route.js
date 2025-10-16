import { Router } from "express";
import { tenantOnboarding } from "../controllers/tenant.onboarding.controller.js";
import { verifyAccessToken } from "../middlewares/verifyToken.js";

const tenantRouter = Router();
tenantRouter.post("/tenant-onboarding", verifyAccessToken, tenantOnboarding);
export default tenantRouter;
