import { useEffect } from "react";
import { useProductStore } from "../../store/productStore";
import Container from "../Container";
import ProductItem from "./ProductItem";
import { useTenantStore } from "../../store/tenantSore";

const ProductGrid = () => {
  const { isLoading, fetchProducts, products } = useProductStore();
  const tenantName = useTenantStore((state) => state.tenant?.tenant_name);

  useEffect(() => {
    if (tenantName) {
      fetchProducts(tenantName);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenantName]);
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
