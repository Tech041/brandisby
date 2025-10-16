import { errorHandler } from "../utils/error.js";

export const tenantSeparator = (req, res, next) => {
  const { tenant } = req.cookies;
  try {
    if (!tenant) {
      throw new Error("No tenant found");
    }
    req.tenant = tenant;
    next();
  } catch (error) {
    next(errorHandler(400, error.message));
  }
};
