import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { productSchema } from "../../schema/ProductUpload";
import apiRequest from "../../utils/apiRequest";
import { useProductStore } from "../../store/productStore";
import { toast } from "react-toastify";
import { useState } from "react";
import { useTenantStore } from "../../store/tenantSore";

type ProductFormData = z.infer<typeof productSchema>;

const ProductUploadForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const addProduct = useProductStore((state) => state.addProduct);
  const tenant = useTenantStore((state) => state.tenant?.tenant_name);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
  });

  const onSubmit = async (data: ProductFormData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("category", data.category);
      formData.append("quantity", data.quantity.toString());
      formData.append("discount", data.discount.toString());
      formData.append("image", data.image);

      const res = await apiRequest.post("/product-upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "x-tenant": tenant,
        },
      });

      if (res.data.success) {
        reset();
        addProduct(res.data.product);
        toast.success(res.data.message || "Product uploaded successfully!");
        setIsLoading(false);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.response?.data?.error || "Error uploading product");
      console.error("Upload error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto"
    >
      <div>
        <label>Name:</label>
        <input {...register("name")} className="w-full px-4 py-2 border" />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>

      <div>
        <label>Description:</label>
        <textarea
          {...register("description")}
          className="w-full px-4 py-2 min-h-20 border"
        />
        {errors.description && (
          <p className="error">{errors.description.message}</p>
        )}
      </div>

      <div>
        <label>Price:</label>
        <input
          type="number"
          step="0.01"
          {...register("price", { valueAsNumber: true })}
          className="w-full px-4 py-2 border"
        />
        {errors.price && <p className="text-red-600">{errors.price.message}</p>}
      </div>

      <div>
        <label>Category:</label>
        <input {...register("category")} className="w-full px-4 py-2 border" />
        {errors.category && (
          <p className="text-red-600">{errors.category.message}</p>
        )}
      </div>

      <div>
        <label>Quantity:</label>
        <input
          type="number"
          {...register("quantity", { valueAsNumber: true })}
          className="w-full px-4 py-2 border"
        />
        {errors.quantity && (
          <p className="text-red-600">{errors.quantity.message}</p>
        )}
      </div>

      <div>
        <label>Discount:</label>
        <input
          type="number"
          {...register("discount", { valueAsNumber: true })}
          className="w-full px-4 py-2 border"
        />
        {errors.discount && (
          <p className="text-red-600">{errors.discount.message}</p>
        )}
      </div>

      <div>
        <label>Image (max 1MB):</label>
        <input
          className="w-full px-4 py-2 border"
          type="file"
          accept="image/jpeg,image/png,image/webp,image/jpg"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              setValue("image", file, { shouldValidate: true });
            }
          }}
        />
        {errors.image && <p className="text-red-600">{errors.image.message}</p>}
      </div>

      <div className="w-full">
        <button
          type="submit"
          className="bg-gray-600 text-white w-full py-2 px-4 cursor-pointer"
        >
          {isLoading ? "Uploading" : "Upload"}{" "}
        </button>
      </div>
    </form>
  );
};

export default ProductUploadForm;
