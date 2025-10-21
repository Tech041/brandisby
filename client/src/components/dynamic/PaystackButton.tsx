import React from "react";

type PaystackProps = {
  email: string;
  amount: number;
  publicKey: string;
  reference?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSuccess: (ref: any) => void;
  onClose: () => void;
};

const PaystackButton: React.FC<PaystackProps> = ({
  email,
  amount,
  publicKey,
  reference = new Date().getTime().toString(),
  onSuccess,
  onClose,
}) => {
  const handlePaystack = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handler = (window as any).PaystackPop.setup({
      key: publicKey,
      email,
      amount,
      ref: reference,
      callback: onSuccess,
      onClose,
    });
    handler.openIframe();
  };

  return (
    <button
      onClick={handlePaystack}
      className="px-4 py-3 bg-green-600 text-white rounded-lg w-full"
    >
      Pay with Paystack
    </button>
  );
};

export default PaystackButton;
