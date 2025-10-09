import { z } from "zod";
// Login for users
export const loginSchema = z.object({
  email: z.email("Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
