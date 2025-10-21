import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  shippingSchema,
  type ShippingFormData,
} from "../../schema/ShippingAndPayment";
import { useCartStore } from "../../store/cartStore";

const ShippingForm = () => {
  const navigate = useNavigate();
  const { tenant } = useParams();

  const { cart, clearCart } = useCartStore();
  const items = Object.values(cart);
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = (data: ShippingFormData) => {
    console.log("Form submitted:", data);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (window as any).PaystackPop.setup({
      key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
      email: data.email,
      amount: total * 1000,
      ref: new Date().getTime().toString(),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      callback: (response: any) => {
        console.log("Payment successful:", response);
        // You can verify the transaction on your backend here
        // I will call payment confirmation endpoint here, if it is confirmed, i will proceed to this response below
        if (response.status === "success") {
          clearCart();
          navigate(`/${tenant}/payment-success`, {
            state: {
              items,
              total,
              reference: response.reference,
            },
          });
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
      {/* Contact Section */}
      <div className="flex justify-between">
        <p className="text-base md:text-xl font-semibold text-black">Contact</p>
        <p>
          <Link className="underline" to={"#"}>
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
      <label className="">Delivery</label>
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
          className="text-white bg-green-600 px-4 py-3 w-full rounded-full cursor-pointer"
          type="submit"
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default ShippingForm;
