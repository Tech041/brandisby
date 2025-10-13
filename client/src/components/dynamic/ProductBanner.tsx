import { TbMathGreater } from "react-icons/tb";
import Container from "../Container";
import { Link, useParams } from "react-router-dom";

const ProductBanner = () => {
  const { tenant } = useParams();

  return (
    <section className="w-full bg-gray-100">
      <Container>
        <div className="w-full h-full lg:h-[400px] flex flex-col sm:flex-row ">
          <div className=" flex-1 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-5">
              Products
            </h1>
            <div className="flex  items-center gap-1 lg:gap-4 text-sm md:text-base">
              <Link to={`/${tenant}`}>Home</Link>
              <span className="">
                <TbMathGreater size={10} />{" "}
              </span>
              <span className="text-gray-400">Products</span>
            </div>
          </div>
          <div className=" flex-[3] flex items-center justify-center sm:justify-end">
            <div className=" w-full sm:w-[80%] h-[95%]">
              <img
                src="/images/product.jpeg"
                alt="product"
                className="w-full h-full object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductBanner;
