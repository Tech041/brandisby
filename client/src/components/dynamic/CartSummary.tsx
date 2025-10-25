import { useState } from "react";

interface CartSummaryProp {
  total: string;
  onclick: () => void;
}

const CartSummary = ({ total, onclick }: CartSummaryProp) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="w-full lg:w-[80%]  p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Cart Total</h2>

      <div className="grid grid-cols-2 gap-y-4 mb-6">
        <div className="font-semibold">Total:</div>
        <div className="text-right">₦{total}</div>
      </div>

      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="blue"
          />
          <span>Confirm order</span>
        </label>

        <button
          onClick={onclick}
          disabled={!isChecked}
          className={`py-3 px-4 rounded-full font-semibold transition-colors cursor-pointer ${
            isChecked
              ? "bg-black text-white hover:bg-gray-800"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
