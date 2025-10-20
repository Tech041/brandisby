import { useFlutterwave } from "flutterwave-react-v3";

type Customer = {
  email: string;
  phonenumber: string;
  name: string;
};
type Customizations = {
  title: string;
  description: string;
  logo: string;
};

type FlutterWaveConfig = {
  public_key: string;
  tx_ref: string;
  amount: number;
  currency: string;
  payment_options: string;
  customer: Customer;
  customizations: Customizations;
};

const Flutterwave = () => {
  const config: FlutterWaveConfig = {
    public_key: import.meta.env.VITE_FLUTTER_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@example.com",
      phonenumber: "08012345678",
      name: "Nelson",
    },
    customizations: {
      title: "My Payment Title",
      description: "Payment for items in cart",
      logo: "https://yourdomain.com/logo.png",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  // const [userAction, setUserAction] = useState<string>("");

  return (
    <button
      type="submit"
      className="px-4 py-3 bg-gray-700 text-white rounded-lg w-full"
      onClick={() => {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
          },
          onClose: () => {
            console.log("Payment modal closed");
            // setUserAction("User closed the payment modal");
          },
        });
      }}
    >
      Pay Now
    </button>
  );
};

export default Flutterwave;
