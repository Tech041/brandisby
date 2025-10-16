import { z } from "zod";
// Register for users
export const registerSchema = z.object({
  name: z.string().min(1, "Name is required"),

  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});