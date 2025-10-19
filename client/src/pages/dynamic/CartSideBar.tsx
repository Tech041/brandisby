import { useNavigate, useParams } from "react-router-dom";
import CartSideBarItem from "./CartSideBarItem";
import { useCartStore } from "../../store/cartStore";
import { useCallback, useState } from "react";
import { useCartSideBarStore } from "../../store/UiStore";

const CartSideBar = () => {
  const { tenant } = useParams();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const { cart, removeFromCart } = useCartStore();
  const { toggleCartSideBar } = useCartSideBarStore();

  const items = Object.values(cart);
  const removeItem = useCallback(
    (id: string) => {
      removeFromCart(id);
    },
    [removeFromCart]
  );

  const totalBeforeDiscount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleNavigateToCartPage = () => {
    toggleCartSideBar();
    navigate(`/${tenant}/cart`);
  };
  const handleCheckout = () => {
    toggleCartSideBar();
    navigate(`/${tenant}/checkout`);
  };

  return (
    <>
      {items.length === 0 ? (
        <p className="text-lg font-semibold text-red-400">Cart is empty</p>
      ) : (
        <div className="w-full h-screen  px-3">
          <div className=" max-h-[150px] md:max-h-[350px] overflow-y-auto ">
            {items.map((item) => (
              <CartSideBarItem
                key={item._id}
                src={item.image}
                productName={item.name}
                quantity={item.quantity}
                price={item.price}
                alt={item.name}
                remove={() => removeItem(item._id)}
              />
            ))}
            <div className="w-full flex items-center justify-between">
              <p className="font-bold">Total:</p>
              <p className="font-bold text-red-400">₦{totalBeforeDiscount}</p>
            </div>
          </div>
          {/* Lower part */}
          <div className="w-full mt-10">
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="blue"
                />
                <span className="text-nowrap">Confirm checkout</span>
              </label>

              <button
                onClick={handleCheckout}
                disabled={!isChecked}
                className={`w-full py-1 sm:py-2 lg:py-3 px-4  uppercase border border-gray-300 rounded-full font-semibold transition-colors cursor-pointer  ${
                  isChecked
                    ? " text-black "
                    : "text-gray-400 cursor-not-allowed"
                }`}
              >
                Checkout
              </button>
            </div>
            <div className="w-full mt-5">
              <button
                onClick={handleNavigateToCartPage}
                className={`w-full py-1 sm:py-2 lg:py-3 px-4 bg-black uppercase text-white hover:bg-black/50  border border-gray-300 rounded-full font-semibold transition-colors cursor-pointer 
              
            `}
              >
                View cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartSideBar;
