import { z } from "zod";

export const flutterSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phonenumber: z
    .string()
    .regex(/^0[789][01]\d{8}$/, "Enter a valid Nigerian phone number"),
  title: z.string().min(2, "Title is required"),
  description: z.string().min(5, "Payment Description is required"),
});
