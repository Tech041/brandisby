import { useParams } from "react-router-dom";
import Container from "../../components/Container";
import { VscGitCompare } from "react-icons/vsc";
import { CiHeart } from "react-icons/ci";
import { GoDash } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { useCartStore } from "../../store/cartStore";
import { useProductStore } from "../../store/productStore";

const ProductDetails = () => {
  const { tenant, productId } = useParams();

  const { products } = useProductStore();

  const selectedProduct = products
    .slice()
    .filter(
      (product) => product._id === productId && product.tenant === tenant
    );

  const { cart, updateQuantity } = useCartStore();
  const { addToCart } = useCartStore();

  return (
    <main className="w-full h-full">
      <Container>
        {selectedProduct?.map((item) => {
          const cartItem = cart[item._id];

          return (
            <div
              key={item._id}
              className="w-full h-[600px] flex  flex-col lg:flex-row gap-5 justify-between"
            >
              <div className="h-full flex-1">
                <div className=" w-full h-full flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-center"
                  />
                </div>
              </div>
              {/* right */}
              <div className=" mt-10 lg:mt-0 flex-1 flex items-center">
                <div className="w-full">
                  <h1 className=" text-2xl md:text-3xl lg:text-5xl text-center lg:text-start pb-5">
                    {item.name}
                  </h1>
                  <div className="">
                    <p className="text-2xl md:text-3xl  font-black py-4 flex gap-4">
                      <span className="">
                        $
                        {(cartItem?.price ?? item.price) *
                          (cartItem?.quantity ?? 1)}
                      </span>{" "}
                    </p>
                    <div className="w-full lg:w-1/2 flex items-center my-6  text-gray-500">
                      <p className="text-lg flex-1">
                        <span className="">Qauntity:</span>
                      </p>
                      <p className="flex-1 flex justify-between gap-2 text-2xl py-5 ">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              (cartItem?.quantity ?? 1) - 1
                            )
                          }
                        >
                          <GoDash className=" text-xl " />
                        </button>
                        <span className="text-lg">
                          {cartItem?.quantity ?? 1}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item._id,
                              (cartItem?.quantity ?? 0) + 1
                            )
                          }
                        >
                          <FaPlus className=" text-xl " />
                        </button>
                      </p>
                    </div>
                    <div className="w-full flex justify-center gap-4 mt-5 py-5">
                      <span className="bg-white hover:bg-black text-gray-600 hover:text-white border border-gray-500 w-15 h-15 flex items-center justify-center rounded-full  cursor-pointer">
                        <CiHeart size={30} />
                      </span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-800 hover:bg-black/50 text-white lg:w-[30%] lg:h-15 py-2 px-4 lg:py-4 lg:px-6 rounded-full flex items-center justify-center cursor-pointer"
                      >
                        Add to cart
                      </button>
                      <span className="bg-white hover:bg-black text-gray-600 border border-gray-500 hover:text-white w-15 h-15 flex items-center justify-center rounded-full  cursor-pointer">
                        <VscGitCompare size={30} />
                      </span>
                    </div>
                    <div className="mt-8">
                      <button className="bg-green-300 hover:bg-green-200 text-white w-full lg:h-13 py-2 px-4 lg:py-4 lg:px-6 r flex items-center justify-center rounded-lg cursor-pointer">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Container>
    </main>
  );
};

export default ProductDetails;
