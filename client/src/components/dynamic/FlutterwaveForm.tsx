import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { flutterSchema } from "../../schema/Payment";

type FormData = z.infer<typeof flutterSchema>;

const FlutterwaveForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(flutterSchema),
  });

  const handleSubmitData = (data: FormData) => {
    console.log("Data are", data);
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitData)} className=" w-full mt-10">
      <h1 className="text-lg font-semibold  text-center w-full">
        Payment Details
      </h1>
      <div className="w-full py-2 ">
        <input
          {...register("name")}
          placeholder="Name"
          className="px-4 py-3 w-full border border-gray-300 rounded-md"
        />
        {errors.name && <p className="text-red-600">{errors.name.message}</p>}
      </div>
      <div className="w-full py-2">
        <input
          {...register("email")}
          placeholder="Email"
          className="px-4 py-3 w-full border border-gray-300 rounded-md"
        />
        {errors.email && <p className="text-red-600">{errors.email.message}</p>}
      </div>

      <div className="w-full py-2">
        <input
          {...register("phonenumber")}
          placeholder="Phone Number"
          className="px-4 py-3 w-full border border-gray-300 rounded-md"
        />
        {errors.phonenumber && (
          <p className="text-red-600">{errors.phonenumber.message}</p>
        )}
      </div>

      <div className="w-full py-2">
        <input
          {...register("title")}
          placeholder="Title"
          className="px-4 py-3 w-full border border-gray-300 rounded-md"
        />
        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
      </div>

      <div className="w-full py-2">
        <textarea
          {...register("description")}
          placeholder="Payment Description"
          className="px-4 py-3 w-full border border-gray-300 rounded-md min-h-10"
        />
        {errors.description && (
          <p className="text-red-600">{errors.description.message}</p>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          type="submit"
          className="text-white bg-gray-800 px-4 py-3 w-full rounded-full "
        >
          Pay Now
        </button>
      </div>
    </form>
  );
};

export default FlutterwaveForm;
