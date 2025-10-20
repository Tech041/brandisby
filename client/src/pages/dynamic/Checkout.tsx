import { useCartStore } from "../../store/cartStore";
import Container from "../../components/Container";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import ShippingForm from "../../components/dynamic/ShippingForm";
import FlutterwaveForm from "../../components/dynamic/FlutterwaveForm";


const Checkout = () => {
  const { tenant } = useParams();
  // const navigate = useNavigate();
  const { cart, setTenant } = useCartStore();
  const items = Object.values(cart);
  const [isOpen, setIsOpen] = useState(false);

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

  return (
    <main className="w-full bg-gray-50 min-h-screen py-10">
      <Container>
        <div className="w-full h-full flex flex-col lg:flex-row gap-4">
          {/* mobile */}
          <div className="lg:hidden bg-white rounded-lg p-2 lg:p-6">
            {/* Accordion Header */}
            <div
              className="flex justify-between items-center cursor-pointer mb-4 border-b pb-2 bg-gray-100 py-4"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex items-center space-x-2 ">
                <h2 className=" text-base lg:text-xl font-semibold">
                  Order Summary
                </h2>
                <p className="">
                  {isOpen ? (
                    <FaChevronUp size={15} color="black" />
                  ) : (
                    <FaChevronDown size={15} color="black" />
                  )}
                </p>
              </div>
              <div className="text-base font-bold text-gray-700">
                ₦{total.toFixed(2)}
              </div>
            </div>

            {/* Accordion Content */}
            {isOpen && (
              <div className="mb-8">
                {items.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  <div className="w-full">
                    {items.map((item) => (
                      <div
                        key={item._id}
                        className="w-full flex justify-between my-3"
                      >
                        <div className="flex-1 flex gap-2">
                          <div className="w-15 h-15 flex-1 relative border-2 border-gray-400 rounded-md flex items-center justify-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 "
                            />
                            <span className="absolute top-[-10px] right-[-5px] bg-black text-white text-sm w-5 h-5 rounded-sm flex items-center justify-center">
                              {item.quantity}
                            </span>
                          </div>
                          <p className="flex-[2] text-sm">{item.name}</p>
                        </div>
                        <div className=" flex-1 flex justify-end">
                          ₦{item.price}
                        </div>
                      </div>
                    ))}
                    <div className="flex justify-between font-semibold">
                      <p className="">Total:</p>
                      <p className="">₦{total.toFixed(2)}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          {/* form for all screens */}
          <div className="flex-1 h-full ">
            <ShippingForm />
            <FlutterwaveForm/>
          </div>
          {/* desktop */}
          <div className="flex-1 hidden lg:block bg-white rounded-lg p-2 lg:px-6">
            {/* Accordion Header */}
            <div className="flex justify-between items-center cursor-pointer mb-4 border-b pb-2 bg-gray-100 py-4 px-2">
              <div className="flex items-center space-x-2 ">
                <h2 className=" text-base lg:text-xl font-semibold">
                  Order Summary
                </h2>
              </div>
              <div className="text-base font-bold text-gray-700">
                ₦{total.toFixed(2)}
              </div>
            </div>

            <div className="mb-8">
              {items.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
              ) : (
                <div className="w-full">
                  {items.map((item) => (
                    <div
                      key={item._id}
                      className="w-full flex justify-between my-3"
                    >
                      <div className="flex-1 flex gap-2">
                        <div className="w-15 h-15 flex-1 relative border-2 border-gray-400 rounded-md flex items-center justify-center">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 "
                          />
                          <span className="absolute top-[-10px] right-[-5px] bg-black text-white text-sm w-5 h-5 rounded-sm flex items-center justify-center">
                            {item.quantity}
                          </span>
                        </div>
                        <p className="flex-[2] text-sm">{item.name}</p>
                      </div>
                      <div className=" flex-1 flex justify-end">
                        ₦{item.price}
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between font-semibold">
                    <p className="">Total:</p>
                    <p className="">₦{total.toFixed(2)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Checkout;
