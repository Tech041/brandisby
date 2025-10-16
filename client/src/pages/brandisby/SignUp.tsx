import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../schema/BrandisbyAuth";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import apiRequest from "../../utils/apiRequest";
import { useState } from "react";

type FormData = z.infer<typeof registerSchema>;

const SignUp = () => {
  const { setUser, setMessage } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await apiRequest.post("/auth/sign-up", data);
      if (res.data.success) {
        reset();
        setUser(res.data.user);
        setMessage(res.data.message);
        toast.success(res.data.message);
        navigate("/tenant-onboarding");
      }
    } catch (err) {
      toast.error("Error signing up");
      console.log("Error signing up", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center ">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row ">
          {/* Form Section */}
          <div className="flex-1 flex flex-col items-center justify-center lg:p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-6"
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-black text-center">
                Join as Creator
              </h1>
              <p className="text-black text-2xl lg:text-4xl text-center">
                Create your account
              </p>

              <div>
                <label htmlFor="" className="">
                  Name
                </label>
                <input
                  {...register("name")}
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-green-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="">
                <label htmlFor="" className="">
                  Email
                </label>

                <input
                  {...register("email")}
                  placeholder="Email"
                  type="email"
                  className="w-full px-4 py-3 border border-green-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="" className="">
                  Password
                </label>

                <input
                  {...register("password")}
                  placeholder="Password"
                  type="password"
                  className="w-full px-4 py-3 border border-green-100 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-300"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-full hover:bg-black/50"
                disabled={loading}
              >
                {loading ? "Signing Up" : "Sign Up"}{" "}
              </button>
            </form>
            <div className="pt-3 text-sm">
              <p className="text-center text-gray-500">
                Have an account?
                <Link to={`/login`} className="text-blue-500 pl-1">
                  Log in
                </Link>
              </p>
              <p className="pt-2 text-center">
                By proceeding, you agree to Brandisby Terms of Service and
                Privacy Policy
              </p>
            </div>
          </div>

          {/* Banner Section */}
          <div className="hidden  lg:w-1/2  bg-[#BBCBFC] lg:flex items-center justify-center px-10 rounded-4xl">
            <p className="text-6xl font-extrabold">
              “Brandisby is your number 1 market place. We bring you closer to
              your intended customers ”
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default SignUp;
