import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductBanner from "../../components/dynamic/ProductBanner";
import ProductGrid from "../../components/dynamic/ProductGrid";
import ProductSort from "../../components/dynamic/ProductSort";
import Spinner from "../../components/Spinner";
import DynamicNotFound from "./DynamicNotFound";
import { useTenantStore } from "../../store/tenantSore";

const Products = () => {
  const { tenant: slug } = useParams();
  const { resolveTenantFromSlug, tenantLoading } = useTenantStore();
  const [validTenant, setValidTenant] = useState<boolean | null>(null);

  useEffect(() => {
    const validateTenant = async () => {
      if (slug) {
        const isValid = await resolveTenantFromSlug(slug);
        setValidTenant(isValid);
      } else {
        setValidTenant(false);
      }
    };

    validateTenant();
  }, [slug]);

  if (tenantLoading || validTenant === null) return <Spinner />;
  if (!validTenant) return <DynamicNotFound />;

  return (
    <main className="w-full h-full mt-5">
      <ProductBanner />
      <ProductSort />
      <ProductGrid />
    </main>
  );
};

export default Products;
