import ProductBanner from "../../components/dynamic/ProductBanner";
import ProductGrid from "../../components/dynamic/ProductGrid";
import ProductSort from "../../components/dynamic/ProductSort";

const Products = () => {
  return (
    <main className="w-full h-full mt-5">
      <ProductBanner />
      <ProductSort />
      <ProductGrid />
    </main>
  );
};

export default Products;
