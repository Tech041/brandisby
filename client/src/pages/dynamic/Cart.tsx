import { useEffect } from "react";
import Container from "../../components/Container";
import { useCartStore } from "../../store/cartStore";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import Button from "../../components/dynamic/Button";
import CartSummary from "../../components/dynamic/CartSummary";
const style1 = "px-4 py-2 border-r border-r-gray-300";
const style2 = "px-4 py-2 border border-gray-300";

const Cart = () => {
  const { tenant } = useParams();
  const navigate = useNavigate();

  const { cart, updateQuantity, removeFromCart, setTenant, clearCart } =
    useCartStore();
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
    navigate(`/${tenant}/checkout`);
  };
  const handleClearCart = () => {
    clearCart();
  };

  return (
    <main className="w-full pt-10 bg-gray-50 min-h-screen py-10">
      {items.length === 0 ? (
        <p className="text-gray-500 text-lg text-center">Your cart is empty.</p>
      ) : (
        <Container>
          <div className=" hidden md:block w-full h-full bg-white rounded-lg p-6">
            <h1 className="text-3xl font-semibold text-black pb-10">
              Your Shopping Cart
            </h1>
            {items.length === 0 ? (
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
            ) : (
              <>
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto border-collapse border border-gray-300">
                    <thead>
                      <tr className="border border-gray-300 text-center text-black text-sm ">
                        <th className={style1}>Image</th>
                        <th className={style1}>Product </th>
                        <th className={style1}>Price</th>
                        <th className={style1}>Quantity</th>
                        <th className={style1}>Subtotal</th>
                        <th className="px-4 py-2 ">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr
                          key={item._id}
                          className="border-b border-b-gray-300 h-[250px] bg-white"
                        >
                          <td className="px-4 py-2 w-[200px] h-full border-r border-r-gray-300">
                            <div className="h-full w-full flex items-center justify-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="h-[80%] w-[80%] object-contain"
                              />
                            </div>
                          </td>
                          <td className={style2}>
                            <div className="flex items-center justify-center h-full font-semibold text-gray-700">
                              {item.name}
                            </div>
                          </td>
                          <td className={style2}>
                            <div className="flex items-center justify-center h-full text-black font-semibold">
                              ₦{item.price.toFixed(2)}
                            </div>
                          </td>
                          <td className={style2}>
                            <div className="flex items-center justify-center gap-2 h-full">
                              <button
                                onClick={() =>
                                  updateQuantity(item._id, item.quantity - 1)
                                }
                                className="px-2 py-1 text-black font-semibold hover:bg-gray-300 rounded text-lg"
                              >
                                (−)
                              </button>
                              <span className="text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item._id, item.quantity + 1)
                                }
                                className="px-2 py-1 text-black font-semibold hover:bg-gray-300 rounded text-lg"
                              >
                                (+)
                              </button>
                            </div>
                          </td>
                          <td className={style2}>
                            <div className="flex items-center justify-center h-full text-black  font-semibold">
                              ₦{(item.price * item.quantity).toFixed(2)}
                            </div>
                          </td>
                          <td className={style2}>
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
                
              </>
            )}
          </div>
          {/* Mobile Layout */}
          <div className="md:hidden space-y-6">
            {items.length === 0 && (
              <p className="text-gray-500 text-lg">Your cart is empty.</p>
            )}
            {items.map((item) => (
              <div
                key={item._id}
                className="relative bg-white border border-gray-300 rounded-lg  "
              >
                {/* Remove Icon */}
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                >
                  <IoCloseSharp size={30} />
                </button>

                {/* Image */}
                <div className="w-full h-[400px] flex justify-center mb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2 text-center">
                  <p className="text-lg h-20 flex items-center justify-center font-semibold text-gray-800 border-b border-b-gray-300 border-t border-t-gray-300">
                    {item.name}
                  </p>
                  <p className="text-sm h-20 flex items-center justify-center text-gray-800 border-b border-b-gray-300 ">
                    ₦{item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="flex h-20 border-b border-b-gray-300 justify-center items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity - 1)
                      }
                      className="px-2 py-1  rounded text-lg font-bold"
                    >
                      (−)
                    </button>
                    <span className="text-sm font-medium">{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item._id, item.quantity + 1)
                      }
                      className="px-2 py-1 rounded text-lg font-bold"
                    >
                      (+)
                    </button>
                  </div>

                  {/* Total */}
                  <p className="text-sm flex items-center justify-center h-20 border-b border-b-gray-300  font-semibold text-gray-700 mt-2">
                    Sub total: ₦{(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Buttons */}
          <div className="w-full flex mt-10">
            <div className="flex-[2] hidden md:block"></div>
            <div className="flex-[3]  flex flex-col md:flex-row  md:justify-end gap-4">
              <div className="w-full md:w-auto  flex justify-end md:justify-start">
                <Button
                  style="bg-gray-200 text-black text-nowrap hover:bg-black hover:text-white px-10  py-4 rounded-full cursor-pointer uppercase "
                  text="Update Cart"
                />
              </div>
              <div className="w-full md:w-auto flex justify-end md:justify-start pr-6 md:pr-0">
                <Link to={`/${tenant}/products`}>
                  <Button
                    style="bg-black text-white text-nowrap hover:bg-white hover:border hover:border-black hover:text-black px-10  py-4 rounded-full  cursor-pointer uppercase"
                    text="Continue Shopping"
                  />
                </Link>
              </div>
              <div className="w-full md:w-auto flex justify-end md:justify-start">
                <Button
                  onclick={handleClearCart}
                  style="bg-black text-white text-nowrap hover:bg-white hover:border hover:border-black hover:text-black px-10  py-4 rounded-full cursor-pointer uppercase  "
                  text="Clear Cart"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row md:justify-between gap-4  mt-10 pt-5">
            <div className="flex-1">
              <div className="w-full lg:max-w-md">
                <label className="block text-lg md:text-xl lg:text-2xl font-medium pb-4 ">
                  Special instructions for seller
                </label>
                <textarea
                  name=""
                  className="min-h-[200px] p-3 border border-gray-300 w-full"
                ></textarea>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="flex-1 w-full flex items-center   ">
              <div className="w-full flex justify-center md:justify-end">
                <CartSummary
                  onclick={handleCheckout}
                  total={totalBeforeDiscount.toFixed(2)}
                />
              </div>
            </div>
          </div>
        </Container>
      )}
    </main>
  );
};

export default Cart;
