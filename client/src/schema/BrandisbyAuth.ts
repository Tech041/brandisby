import { z } from "zod";
// Register for Creators
export const registerSchema = z.object({
  brandname: z
    .string()
    .min(1, "Brand name must be atleat 1 character")
    .max(10, "Brand name must not be more than 10 characters"),
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  logo: z
    .string()
    .min(1, "Logo must be atleat 1 character")
    .max(6, "Logo must not be more than 10 characters"),
  country: z.string().min(1, "Country is required"),
  businessType: z.string().min(1, "Business type is required"),
});

// Login for Creators
export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
