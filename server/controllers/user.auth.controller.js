import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import { passwordHasher } from "../utils/passwordHasher.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/tokenGenerator.js";
import jwt from "jsonwebtoken";

// User registration
export const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // 1. Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorHandler(409, "User already exists"));
    }

    // 2. Hash the password
    const hashedPassword = await passwordHasher(password);

    // 3. Create the user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 4. Generate token
    const access_token = generateAccessToken({
      userId: user._id,
      userRole: user.role,
    });

    // 5. Generate token
    const refresh_token = generateAccessToken({
      userId: user._id,
      userRole: user.role,
    });

    res.cookie("access_token", access_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 5 * 60 * 1000,
    });
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "Registration successful",
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        tenant: user.tenant,
      },
    });
  } catch (error) {
    next(
      errorHandler(
        500,
        error.message || "Error occurred while registering user"
      )
    );
  }
};

// User sign in
export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return next(errorHandler(401, "No user found"));
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return next(errorHandler(400, "Incorrect credential"));
    }

    const access_token = generateAccessToken({
      userId: user._id,
      userRole: user.role,
    });

    const refresh_token = generateAccessToken({
      userId: user._id,
      userRole: user.role,
    });

    res.cookie("access_token", access_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 30 * 60 * 1000,
    });
    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(201).json({
      success: true,
      message: "You are logged in",
      user: {
        userId: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        tenant: user.tenant,
      },
    });
  } catch (error) {
    next(
      errorHandler(500, error.message || "Error occurred while signing in user")
    );
  }
};

// Refresh token login
export const refreshAccessToken = async (req, res, next) => {
  const refreshToken = req.cookies?.refresh_token;
  if (!refreshToken) return next(errorHandler(401, "Missing refresh token"));

  try {
    const payload = jwt.verify(refreshToken, process.env.REFRESH_SECRET);
    const user = await User.findById(payload.userId);
    if (!user || user.refresh_token !== refreshToken) {
      return next(errorHandler(403, "Refresh token mismatch"));
    }

    // Issue new access token
    const newAccessToken = generateAccessToken({
      userId: user._id,
      userRole: user.role,
      tenant: user.tenant,
    });

    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 60 * 1000,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      // Refresh token expired — generate a new one
      const user = await User.findOne({ refresh_token: refreshToken });
      if (!user) return next(errorHandler(403, "No user found"));

      const newRefreshToken = generateRefreshToken({
        userId: user._id,
        userRole: user.role,
        tenant: user.tenant,
      });

      user.refresh_token = newRefreshToken;
      await user.save();

      res.cookie("refresh_token", newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      });

      return res.status(200).json({ message: "New refresh token issued" });
    }

    return next(errorHandler(401, "Invalid refresh token"));
  }
};
