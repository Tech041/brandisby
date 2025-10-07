import { z } from "zod";
export const registerSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email"),

  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});
