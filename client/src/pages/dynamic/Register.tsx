import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Container from "../../components/Container";
import { registerSchema } from "../../schema/DynamicAuth";
import { useParams } from "react-router-dom";

type RegisterFormData = z.infer<typeof registerSchema>;

const Register = () => {
  const { tenant } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Register Data:", data);
  };

  return (
    <main className="w-full h-screen flex items-center justify-center ">
      <Container>
        <div className="">
          <h1 className=" w-full text-center text-xl md:text=2xl lg:text-6xl">
            {tenant === "serac"
              ? "Sign Up For Serac"
              : "Sign Up For Fleurdevie"}
          </h1>
          <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md mt-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block mb-1">Full Name</label>
                <input
                  {...register("fullName")}
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block mb-1">Email</label>
                <input
                  {...register("email")}
                  type="email"
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block mb-1">Password</label>
                <input
                  {...register("password")}
                  type="password"
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default Register;
