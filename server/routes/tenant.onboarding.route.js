import { Router } from "express";
import {
  fetchAllTenants,
  getTenantBySlug,
  tenantOnboarding,
} from "../controllers/tenant.onboarding.controller.js";
import { verifyAccessToken } from "../middlewares/verifyToken.js";

const tenantRouter = Router();
tenantRouter.post("/tenant-onboarding", verifyAccessToken, tenantOnboarding);
tenantRouter.get("/tenants", fetchAllTenants);
tenantRouter.get("/tenants/:slug",getTenantBySlug) 

export default tenantRouter;
