import { useCartStore } from "../../store/cartStore";
import Container from "../../components/Container";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const { tenant } = useParams();
  const navigate = useNavigate();
  const { cart, clearCart, setTenant } = useCartStore();
  const items = Object.values(cart);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    if (tenant) {
      setTenant(tenant);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tenant]);

  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handlePlaceOrder = () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.phone) {
      alert("Please fill out all shipping details.");
      return;
    }

    // Simulate order placement
    alert("Order placed successfully!");
    clearCart();
    navigate(`/${tenant}/thank-you`);
  };

  return (
    <main className="w-full bg-gray-50 min-h-screen py-10">
      <Container>
        <div className="bg-white  rounded-lg  p-2 lg:p-6 lg:max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">Checkout</h1>

          {/* Order Summary */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🛍️ Order Summary</h2>
            {items.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {items.map((item) => (
                  <li
                    key={item._id}
                    className="flex justify-between border-b pb-2"
                  >
                    <span>
                      {item.name} × {item.quantity}
                    </span>
                    <span>#{(item.price * item.quantity).toFixed(2)}</span>
                  </li>
                ))}
                <li className="flex justify-between font-bold text-lg pt-4">
                  <span>Total</span>
                  <span>#{total.toFixed(2)}</span>
                </li>
              </ul>
            )}
          </div>

          {/* Shipping Info */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">🚚 Shipping Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                value={shippingInfo.name}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, name: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Delivery Address"
                value={shippingInfo.address}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, address: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={shippingInfo.phone}
                onChange={(e) =>
                  setShippingInfo({ ...shippingInfo, phone: e.target.value })
                }
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Place Order */}
          <div className="text-right">
            <button
              onClick={handlePlaceOrder}
              className="bg-green-400 hover:bg-green-300 cursor-pointer text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            >
              Place Order
            </button>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Order;
