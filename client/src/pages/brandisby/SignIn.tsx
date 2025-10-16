import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Container from "../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../../schema/BrandisbyAuth";
import apiRequest from "../../utils/apiRequest";
import { useAuthStore } from "../../store/authStore";
import { toast } from "react-toastify";
import { useState } from "react";

type FormData = z.infer<typeof loginSchema>;

const SignIn = () => {
  const { setUser, setMessage } = useAuthStore();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await apiRequest.post("/auth/sign-in", data);
      if (res.data.success) {
        reset();
        setUser(res.data.user);
        setMessage(res.data.message);
        toast.success(res.data.message);
        navigate("/tenant-onboarding");
      }
    } catch (err) {
      toast.error("Error signing In");
      console.log("Error signing in", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full h-screen flex items-center justify-center ">
      <Container>
        <div className="w-full h-[500px] flex flex-col lg:flex-row ">
          {/* Form Section */}
          <div className="flex-1 flex flex-col items-center justify-center lg:p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full max-w-md space-y-6"
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-black text-center">
                Welcome Back
              </h1>
              <p className="text-black text-2xl lg:text-4xl text-center">
                Login to your account
              </p>

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
                {loading ? "Signing In" : "Sign In"}
              </button>
            </form>
            <div className="pt-3 text-sm">
              <p className="text-center text-gray-500">
                Do not have an account?
                <Link to={`/register`} className="text-blue-500 pl-1">
                  Register
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
export default SignIn;
