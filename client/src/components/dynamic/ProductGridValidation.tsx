import { useEffect, useState } from "react";
import { useProductStore } from "../../store/productStore";
import Container from "../Container";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import Spinner from "../Spinner";
import DynamicNotFound from "../../pages/dynamic/DynamicNotFound";
import { useTenantStore } from "../../store/tenantSore";

const ProductGrid = () => {
  const { tenant: slug } = useParams();
  const { isLoading, fetchProducts, products } = useProductStore();
  const { setTenant } = useCartStore();
  const { resolveTenantFromSlug } = useTenantStore();

  const [validTenant, setValidTenant] = useState<boolean | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const validateAndFetch = async () => {
      setChecking(true);
      if (slug) {
        const isValid = await resolveTenantFromSlug(slug);
        setValidTenant(isValid);
        if (isValid) {
          fetchProducts(slug);
          setTenant(slug);
        }
      } else {
        setValidTenant(false);
      }
      setChecking(false);
    };

    validateAndFetch();
  }, [slug]);

  if (checking || validTenant === null) return <Spinner />;
  if (!validTenant) return <DynamicNotFound />;

  return (
    <section className="w-full h-full">
      <Container>
        {isLoading ? (
          <p>Loading Products ...</p>
        ) : (
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductItem key={product._id} product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductGrid;
