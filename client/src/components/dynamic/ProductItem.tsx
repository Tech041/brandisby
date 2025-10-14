import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/productTypes";

interface ProductItemProp {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProp) => {
  const { tenant } = useParams();
  const { addToCart } = useCartStore();

  return (
    <div className="w-full h-[450px] border border-gray-100 rounded-md shadow-md">
      <div className="h-[70%] w-full ">
        <img src={product.image} alt="product" className="w-full h-full" />
      </div>
      <div className="h-[30%]  ">
        <div className="w-full text-center py-2 ">
          <p className="font-semibold">{product.name}</p>
          <p className="font-light italic flex justify-center gap-3">
            <span className="">#{product.price}</span>
          </p>
        </div>
        <div className="flex items-center justify-evenly gap-3">
          <Link
            onClick={() => scrollTo(0, 0)}
            to={`/${tenant}/product-details/${product._id}`}
            className="bg-black h-15 w-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer"
          >
            <CiSearch size={30} color="white" />
          </Link>{" "}
          <span
            onClick={() => addToCart(product)}
            className="bg-black w-15 h-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer"
          >
            <IoCartOutline size={30} color="white" />
          </span>
          <span className="bg-black w-15 h-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer">
            <VscGitCompare size={30} color="white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
