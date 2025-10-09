import { z } from "zod";
// Register for users
export const registerSchema = z.object({
  firstname: z.string().min(1, "First name is required"),

  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Login for users
export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
