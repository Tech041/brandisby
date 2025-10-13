import Container from "../Container";
import ProductItem from "./ProductItem";

const ProductGrid = () => {
  return (
    <section className="w-full h-full">
      <Container>
        <div className="w-full h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
          <ProductItem
            src="/images/product.jpeg"
            title="Washing hand basin"
            price="2500"
          />{" "}
        </div>
      </Container>
    </section>
  );
};

export default ProductGrid;
