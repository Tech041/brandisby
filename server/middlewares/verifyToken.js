import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const verifyAccessToken = (req, res, next) => {
  const token = req.cookies?.access_token;

  if (!token) return next(errorHandler(400, "No access token found"));

  jwt.verify(token, process.env.ACCESS_SECRET, (err, payload) => {
    if (err && err.name === "TokenExpiredError") {
      return next(errorHandler(401, "Expired token"));
    }
    if (err) return res.status(403).json({ message: "Invalid access token" });

    req.user = payload;
    next();
  });
};
