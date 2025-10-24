import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTenantStore } from "../../store/tenantSore";
import DynamicNotFound from "./DynamicNotFound";
import Spinner from "../../components/Spinner";
import { RiHome7Line } from "react-icons/ri";
import { MdOutlineCloudUpload } from "react-icons/md";
import { AiOutlineProduct } from "react-icons/ai";
import Container from "../../components/Container";
import ProductUploadForm from "./ProductUploadForm";

const section = [
  { title: "general", path: "general", icon: <RiHome7Line /> },
  {
    title: "upload",
    path: "upload",
    icon: <MdOutlineCloudUpload />,
  },
  {
    title: "products",
    path: "products",
    icon: <AiOutlineProduct />,
  },
];

const TenantDashboard = () => {
  const [activeSection, setActiveSection] = useState<
    "general" | "upload" | "products"
  >("general");

  const { tenant: slug } = useParams();
  const { resolveTenantFromSlug, tenantLoading, tenant } = useTenantStore();
  const [validTenant, setValidTenant] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    const validateTenant = async () => {
      if (slug && tenant?.tenant_name !== slug) {
        const isValid = await resolveTenantFromSlug(slug);
        if (!cancelled) setValidTenant(isValid);
      } else {
        setValidTenant(!!tenant); // fallback if tenant already exists
      }
    };

    validateTenant();

    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (tenantLoading || validTenant === null) return <Spinner />;
  if (!validTenant) return <DynamicNotFound />;

  return (
    <main className="   mt-10">
      <Container>
        <div className="w-full min-h-screen  flex ">
          {/* Sidebar */}
          <aside className="w-15 lg:w-64 border-r border-r-gray-800 flex flex-col items-center  text-gray-800 px-6 space-y-4">
            <h2 className="text-xl font-bold hidden lg:block">Tenant Panel</h2>
            {section.map((section) => (
              <button
                key={section.title}
                onClick={() =>
                  setActiveSection(section.title as typeof activeSection)
                }
                className={`w-full text-center lg:text-left px-4 py-2 rounded cursor-pointer ${
                  activeSection === section.path
                    ? "lg:bg-gray-400 text-white"
                    : "lg:hover:bg-gray-200 text-gray-600"
                }`}
              >
                <span className="flex items-center justify-center lg:justify-start  gap-2">
                  <span className=" text-3xl lg:text-2xl text-gray-800">
                    {section.icon}
                  </span>
                  <span className="hidden lg:block">
                    {section.title.charAt(0).toUpperCase() +
                      section.title.slice(1)}
                  </span>
                  {""}
                </span>
              </button>
            ))}
          </aside>

          {/* Content Area */}
          <section className="flex-grow p-8 overflow-y-auto">
            {activeSection === "general" && (
              <div className="">
                <h1 className="text-2xl font-bold mb-4">
                  Welcome back, {tenant?.brand}!
                </h1>
                <p>This is your general overview.</p>
              </div>
            )}
            {activeSection === "upload" && (
              <div className="">
                <h1 className="text-2xl font-bold mb-4">Upload Documents</h1>
                <div className="">
                  <ProductUploadForm />
                </div>
              </div>
            )}
            {activeSection === "products" && (
              <div className="bg-blue-400">
                <h1 className="text-2xl font-bold mb-4">Your Products</h1>
                <p>List of items or services you offer.</p>
              </div>
            )}
          </section>
        </div>
      </Container>
    </main>
  );
};

export default TenantDashboard;
