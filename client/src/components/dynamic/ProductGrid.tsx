import { useEffect } from "react";
import { useProductStore } from "../../store/productStore";
import Container from "../Container";
import ProductItem from "./ProductItem";
import { useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";

const ProductGrid = () => {
  const { tenant } = useParams();
  const { isLoading, fetchProducts, products } = useProductStore();
  const { setTenant } = useCartStore();

  useEffect(() => {
    if (tenant) {
      fetchProducts(tenant);
      setTenant(tenant);
    }
  }, [tenant]);
  return (
    <section className="w-full h-full">
      <Container>
        {isLoading ? (
          <p>Loading Products ...</p>
        ) : (
          <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {products.map((product) => (
              <ProductItem product={product} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProductGrid;
