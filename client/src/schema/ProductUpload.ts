import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.number().min(0, "Price must be positive"),
  category: z.string().min(1, "Category is required"),
  quantity: z.number().int().min(0, "Quantity must be zero or more"),
  discount: z.number().min(0, "Discount must be zero or more"),
  image: z
    .instanceof(File, { message: "Image is required" })
    .refine((file) => file.size <= 1024 * 1024, {
      message: "Image must be less than 1MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/webp", "image/jpg"].includes(
          file.type
        ),
      {
        message: "Only JPEG, PNG, JPG, or WEBP images are allowed",
      }
    ),
});
