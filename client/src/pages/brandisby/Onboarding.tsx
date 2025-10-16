import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { onboardingSchema } from "../../schema/BrandisbyAuth";
import Container from "../../components/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiRequest from "../../utils/apiRequest";
import { useTenantStore } from "../../store/tenantSore";
import { toast } from "react-toastify";

type FormData = z.infer<typeof onboardingSchema>;

const Onboarding = () => {
  const [loading, setLoading] = useState(false);
  const { setTenant, setMessage } = useTenantStore();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(onboardingSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      const res = await apiRequest.post("/tenant-onboarding", data);
      if (res.data.success) {
        navigate("/dashboard");
        reset();
        setMessage(res.data.message);
        setTenant(res.data.tenant);
      }
    } catch (err) {
      console.log("Error onboarding tenant", err);
      toast.error("Error occured during onboarding");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="w-full min-h-screen flex items-center justify-center bg-gray-50">
      <Container>
        <div className=" shadow-lg rounded-xl p-8 w-full ">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
            <h1 className="text-4xl font-bold text-center text-gray-800">
              Tenant Onboarding
            </h1>
            <p className="text-center text-gray-500">
              Tell us about your brand
            </p>

            {[
              {
                label: "Brand Name",
                name: "brand",
                type: "text",
                placeholder: "Xestracom Gadgets",
              },
              {
                label: "Logo ",
                name: "logo",
                type: "text",
                placeholder: "Xestracom",
              },

              {
                label: "Phone Number",
                name: "phone",
                type: "string",
                placeholder: "+1-3847-48382",
              },
              {
                label: "Business Address",
                name: "business_address",
                type: "text",
                placeholder: "Upper Hilton, Liverpool",
              },
              {
                label: "Country",
                name: "country",
                type: "text",
                placeholder: "Germany",
              },
              {
                label: "Business Type",
                name: "business_type",
                type: "text",
                placeholder: "Electronics",
              },
            ].map(({ label, name, type, placeholder }) => (
              <div key={name}>
                <label className="block mb-1 font-medium text-gray-700">
                  {label}
                </label>
                <input
                  {...register(name as keyof FormData)}
                  type={type}
                  placeholder={placeholder}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                {errors[name as keyof FormData] && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors[name as keyof FormData]?.message}
                  </p>
                )}
              </div>
            ))}

            {/* About Section */}
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                About Your Brand
              </label>
              <textarea
                {...register("about")}
                placeholder="Tell us about your brand"
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.about && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.about.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-black text-white py-3 rounded-full transition duration-300 ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:bg-black/80"
              }`}
            >
              {loading ? "Submitting..." : "Submit Onboarding"}
            </button>

            <p className="text-center text-sm text-gray-500 pt-2">
              Already onboarded?{" "}
              <Link to="/dashboard" className="text-blue-500 hover:underline">
                Go to Dashboard
              </Link>
            </p>
          </form>
        </div>
      </Container>
    </main>
  );
};

export default Onboarding;
