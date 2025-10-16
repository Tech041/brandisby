import { useEffect } from "react";
import Container from "../../components/Container";
import { useCartStore } from "../../store/cartStore";
import { useParams, useNavigate } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";


const Cart = () => {
  const { tenant } = useParams();
  const navigate = useNavigate();

  const { cart, updateQuantity, removeFromCart, setTenant } = useCartStore();
  const items = Object.values(cart);

  const totalBeforeDiscount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (tenant) {
      setTenant(tenant);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenant]);

  const handleCheckout = () => {
    
    navigate(`/${tenant}/product/checkout`);
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen py-10">
      <Container>
        <div className="w-full h-full bg-white  rounded-lg p-6">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            🛒 Your Cart
          </h1>
          {items.length === 0 ? (
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            <div className="space-y-6">
              {items.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center border-b pb-4"
                >
                  <div className="flex">
                    <div className="flex-[3]">
                      <p className="font-semibold text-sm lg:text-lg text-gray-700">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 ">
                        <span className="">
                          ₦{(item.price - item.price / 10) * item.quantity}
                        </span>
                      </p>
                    </div>
                    <div className="flex-1 hidden lg:block">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-10 w-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="px-3 py-1 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded text-lg"
                    >
                      −
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-3 py-1 cursor-pointer bg-gray-200 hover:bg-gray-300 rounded text-lg"
                    >
                      +
                    </button>
                    <span
                      onClick={() => removeFromCart(item._id)}
                      className="ml-4 text-red-500 hover:text-red-700 text-sm cursor-pointer"
                    >
                      <FaRegTrashCan size={20} />
                    </span>
                  </div>
                </div>
              ))}
              <div className="text-right font-bold text-2xl mt-6 text-gray-800 ">
                Total:
                <span className=""> ₦{totalBeforeDiscount.toFixed(2)}</span>
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 hover:bg-green-700 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Cart;
