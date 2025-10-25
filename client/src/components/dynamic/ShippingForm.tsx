import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import {
  shippingSchema,
  type ShippingFormData,
} from "../../schema/ShippingAndPayment";
import { useCartStore } from "../../store/cartStore";
import apiRequest from "../../utils/apiRequest";
import { useAuthStore } from "../../store/authStore";
import { useTenantStore } from "../../store/tenantSore";
import { useState } from "react";

const ShippingForm = () => {
  const navigate = useNavigate();
  const userId = useAuthStore((state) => state.user?.userId);
  const tenantName = useTenantStore((state) => state.tenant?.tenant_name);
  const { cart, clearCart, setShippingForm, message } = useCartStore();
  const items = Object.values(cart);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [isVerifying, setIsVerifying] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  const verifyPayment = async (reference: string, data: ShippingFormData) => {
    try {
      setIsVerifying(true);
      const confirmRes = await apiRequest.post("/verify-payment", {
        reference,
        cart,
        shippingForm: data,
        tenant: tenantName,
        message,
        userId,
        total,
      });

      setIsVerifying(false);

      if (confirmRes.data.success) {
        clearCart();
        setShippingForm({
          name: "",
          email: "",
          address: "",
          city: "",
          state: "",
          country: "",
        });
        navigate(`/${tenantName}/payment-success`, {
          state: {
            items,
            total,
            reference,
            orderId: confirmRes.data.orderId,
          },
        });
      } else {
        alert(
          "Payment was successful, but confirmation failed. Please contact support."
        );
      }
    } catch (err) {
      setIsVerifying(false);
      console.error("Checkout error:", err);
      alert(
        "Payment succeeded, but we couldn't verify it. Please try again or contact support."
      );
    }
  };

  const onSubmit = (data: ShippingFormData) => {
    setShippingForm(data);
    const reference = new Date().getTime().toString();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (window as any).PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: data.email,
      amount: total * 100,
      ref: reference,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (response: any) => {
        console.log("Payment successful:", response);
        if (response.status === "success") {
          verifyPayment(response.reference, data);
        }
      },
      onClose: () => {
        console.log("Payment modal closed");
      },
    });

    handler.openIframe();
  };

  return (
    <form className="w-full h-full" onSubmit={handleSubmit(onSubmit)}>
      {isVerifying && (
        <div className="text-center text-blue-600 font-semibold mb-4">
          Verifying payment, please wait...
        </div>
      )}

      {/* Contact Section */}
      <div className="flex justify-between">
        <p className="text-base md:text-xl font-semibold text-black">Contact</p>
        <p>
          <Link
            className="underline text-blue-500"
            to={`/${tenantName}/sign-in`}
          >
            Sign In
          </Link>
        </p>
      </div>

      {/* Email */}
      <div className="w-full my-2">
        <input
          type="text"
          {...register("email")}
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* Delivery Section */}
      <label>Delivery</label>
      <div className="w-full my-2">
        <input
          type="text"
          {...register("country")}
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Country"
        />
        {errors.country && (
          <p className="text-red-500">{errors.country.message}</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-4 my-2">
        <div className="w-full mt-1">
          <input
            type="text"
            {...register("city")}
            className="px-4 py-3 border border-gray-300 rounded-lg w-full"
            placeholder="City"
          />
          {errors.city && <p className="text-red-500">{errors.city.message}</p>}
        </div>
        <div className="w-full mt-1">
          <input
            type="text"
            {...register("state")}
            className="px-4 py-3 border border-gray-300 rounded-lg w-full"
            placeholder="State"
          />
          {errors.state && (
            <p className="text-red-500">{errors.state.message}</p>
          )}
        </div>
      </div>

      <div className="w-full my-2">
        <input
          type="text"
          {...register("address")}
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Address ..."
        />
        {errors.address && (
          <p className="text-red-500">{errors.address.message}</p>
        )}
      </div>

      {/* Name */}
      <div className="w-full my-2">
        <input
          type="text"
          {...register("name")}
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>

      {/* Submit */}
      <div className="w-full mt-2">
        <button
          className="text-white bg-black hover:bg-black/50 px-4 py-3 w-full rounded-xl cursor-pointer"
          type="submit"
          disabled={isVerifying}
        >
          {isVerifying ? "Processing..." : "Check Out"}
        </button>
      </div>
    </form>
  );
};

export default ShippingForm;
