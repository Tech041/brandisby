import Tenant from "../models/tenant.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const tenantOnboarding = async (req, res, next) => {
  const tenantInfo = req.body;

  const rawBrand = req.body.brand;
  const slug = rawBrand
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters (no need to escape `-` here)
    .replace(/--+/g, "-");

  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(401, "Register before creating store"));
    }
    const tenant = await Tenant.create({
      ...tenantInfo,
      tenant_name: slug, // use the slug here
      creator: user._id,
    });

    user.tenant = tenant.tenant_name;
    await user.save();
    return res.status(201).json({
      success: true,
      message: "Tenant onboarding successful",
      tenant,
    });
  } catch (error) {
    console.log("Error onboarding", error);
    return next(errorHandler(500, "Error onboarding tenant"));
  }
};

// Fetching all tenants
export const fetchAllTenants = async (req, res, next) => {
  try {
    const tenants = await Tenant.find({}, "tenant_name");

    // Extract only the tenant_name values
    const tenantNames = tenants.map((t) => t.tenant_name);

    return res.status(200).json({
      success: true,
      count: tenantNames.length,
      tenants: tenantNames,
    });
  } catch (error) {
    next(errorHandler(400, error.message || "Error fetching tenants"));
  }
};

export const getTenantBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const tenant = await Tenant.findOne({ tenant_name: slug });

    if (!tenant) return res.status(404).json({ error: "Tenant not found" });

    return res.status(200).json({ tenant });
  } catch (error) {
    return next(errorHandler(404, error.message));
  }
};
