import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const addToCart = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const tenant = req.tenant;
    const cartData = req.body;

    const user = await User.findOne({ userId, tenant });
    if (!user) {
      return next(errorHandler(401, "No user found"));
    }
    user.userCart = cartData;
    const order = await user.save();
    return res.status(201).json({ message: "Order placed", order });
  } catch (err) {
    res.status(500).json({ error: "Failed to order" });
  }
};
