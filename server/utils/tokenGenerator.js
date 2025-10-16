import jwt from "jsonwebtoken";

export const generateAccessToken = ({ userId, userRole }) => {
  return jwt.sign(
    { userId, role: userRole },
    process.env.ACCESS_SECRET,
    { expiresIn: "15m" } // Short lifespan
  );
};

export const generateRefreshToken = ({ userId, userRole }) => {
  return jwt.sign(
    { userId, role: userRole },
    process.env.REFRESH_SECRET,
    { expiresIn: "7d" } // Longer lifespan
  );
};
