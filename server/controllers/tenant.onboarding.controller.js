import Tenant from "../models/tenant.model.js";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const tenantOnboarding = async (req, res, next) => {
  const tenantInfo = req.body;
  

  try {
    const { userId } = req.user;
    const user = await User.findById(userId);
    if (!user) {
      return next(errorHandler(401, "Register before creating store"));
    }
    const tenant = await Tenant.create({ ...tenantInfo, creator: user._id });
    user.tenant = tenant._id;
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
