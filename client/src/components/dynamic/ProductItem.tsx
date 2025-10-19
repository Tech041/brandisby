import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import { Link, useParams } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import type { Product } from "../../types/productTypes";
import { motion } from "framer-motion";

interface ProductItemProp {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProp) => {
  const { tenant } = useParams();
  const { addToCart } = useCartStore();

  return (
    <div className="w-full h-[350px] border border-gray-300 cursor-pointer group overflow-hidden">
      {/* Image section */}
      <div className="h-[70%] w-full overflow-hidden">
        <img
          src={product.image}
          alt="product"
          className="w-full h-full object-contain transform transition-transform duration-500 ease-in-out group-hover:scale-95"
        />
      </div>

      {/* Info + hover actions */}
      <div className="h-[30%]">
        <div className="w-full text-center py-2 group-hover:hidden">
          <p className="font-semibold">{product.name}</p>
          <p className="font-light italic flex justify-center gap-3">
            <span>₦{product.price}</span>
          </p>
        </div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false }}
          className="hidden group-hover:flex items-center justify-evenly gap-3 relative"
        >
          {/* SEARCH ICON */}
          <div className="relative group/icon">
            <Link
              onClick={() => scrollTo(0, 0)}
              to={`/${tenant}/product-details/${product._id}`}
              className="bg-black h-15 w-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer"
            >
              <CiSearch size={30} color="white" />
            </Link>

            {/* Tooltip */}
            <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
              View Details
              {/* Arrow */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* ADD TO CART ICON */}
          <div className="relative group/icon">
            <span
              onClick={() => addToCart(product)}
              className="bg-black w-15 h-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer"
            >
              <IoCartOutline size={30} color="white" />
            </span>
            <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
              Add to Cart
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </div>

          {/* COMPARE ICON */}
          <div className="relative group/icon">
            <span className="bg-black w-15 h-15 flex items-center justify-center rounded-full hover:bg-orange-900 cursor-pointer">
              <VscGitCompare size={30} color="white" />
            </span>
            <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
              Compare
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-800"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductItem;
