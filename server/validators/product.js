import { z } from "zod";

export const serverProductSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  price: z
    .number({ invalid_type_error: "Price must be a number" })
    .min(0, { message: "Price must be positive" }),
  category: z.string().min(1, { message: "Category is required" }),
  quantity: z
    .number({ invalid_type_error: "Quantity must be a number" })
    .int({ message: "Quantity must be an integer" })
    .min(0, { message: "Quantity must be zero or more" }),
  discount: z
    .number({ invalid_type_error: "Discount must be a number" })
    .min(0, { message: "Discount must be zero or more" }),
  // image is handled separately via Busboy + Sharp
});
