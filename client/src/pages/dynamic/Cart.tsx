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
        <div className="w-full h-full bg-white rounded-lg p-6">
          <h1 className="text-3xl font-semibold text-black pb-10">
            Your Shopping Cart
          </h1>
          {items.length === 0 ? (
            <p className="text-gray-500 text-lg">Your cart is empty.</p>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full table-auto border-collapse border">
                  <thead>
                    <tr className="border text-center text-gray-700 text-sm ">
                      <th className="px-4 py-2 border-r">Image</th>
                      <th className="px-4 py-2 border-r">Product </th>
                      <th className="px-4 py-2 border-r">Price</th>
                      <th className="px-4 py-2 border-r">Quantity</th>
                      <th className="px-4 py-2 border-r">Total</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr
                        key={item._id}
                        className="border-b h-[250px] bg-white"
                      >
                        <td className="px-4 py-2 w-[200px] h-full border-r">
                          <div className="h-full w-full flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-[80%] w-[80%] object-contain"
                            />
                          </div>
                        </td>
                        <td className="px-4 py-2 border-r">
                          <div className="flex items-center justify-center h-full font-semibold text-gray-700">
                            {item.name}
                          </div>
                        </td>
                        <td className="px-4 py-2 border-r">
                          <div className="flex items-center justify-center h-full text-gray-600">
                            ₦{item.price.toFixed(2)}
                          </div>
                        </td>
                        <td className="px-4 py-2 border-r">
                          <div className="flex items-center justify-center gap-2 h-full">
                            <button
                              onClick={() =>
                                updateQuantity(item._id, item.quantity - 1)
                              }
                              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                            >
                              −
                            </button>
                            <span className="text-lg font-medium">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item._id, item.quantity + 1)
                              }
                              className="px-2 py-1 bg-gray-200 hover:bg-gray-300 rounded text-lg"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-2 border-r">
                          <div className="flex items-center justify-center h-full text-gray-700 font-medium">
                            ₦{(item.price * item.quantity).toFixed(2)}
                          </div>
                        </td>
                        <td className="px-4 py-2 border-r">
                          <div className="flex items-center justify-center h-full">
                            <button
                              onClick={() => removeFromCart(item._id)}
                              className="text-gray-600 "
                            >
                              <FaRegTrashCan size={20} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="text-right font-bold text-2xl mt-6 text-gray-800">
                Total: ₦{totalBeforeDiscount.toFixed(2)}
              </div>
              <div className="flex justify-end mt-6">
                <button
                  onClick={handleCheckout}
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
                >
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Cart;
