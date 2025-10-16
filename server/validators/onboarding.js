//Tenant Onboarding

export const onboardingSchema = z.object({
  brand: z
    .string()
    .min(1, "Brand name must be atleat 1 character")
    .max(10, "Brand name must not be more than 10 characters"),
  logo: z
    .string()
    .min(1, "Logo must be atleat 1 character")
    .max(6, "Logo must not be more than 10 characters"),

  about: z.string().min(10, "Tell us more about your brand"),
  phone: z.string().min(7, "Phone number is required"),
  business_address: z.string().min(5, "Business address is required"),
  business_type: z.string().min(2, "Business type is required"),
  country: z.string().min(2, "Country is required"),
});
