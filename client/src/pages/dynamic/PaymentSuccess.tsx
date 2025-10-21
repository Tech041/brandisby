/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLocation, Link, useParams } from "react-router-dom";
import Container from "../../components/Container";

const PaymentSuccess = () => {
  const location = useLocation();
  const { tenant } = useParams();

  const { items, total, reference } = location.state || {};

  return (
    <main className="w-full">
      <Container>
        <div className="max-w-2xl mx-auto p-6 text-center">
          <h1 className="text-2xl font-bold text-green-600 mb-4">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-700 mb-2">
            Reference: <strong>{reference}</strong>
          </p>
          <p className="text-gray-700 mb-6">Thank you for your purchase!</p>

          <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-lg font-semibold mb-2">Items Purchased:</h2>
            <ul className="text-center">
              {items?.map((item: any, index: number) => (
                <li key={index}>
                  {item.name} × {item.quantity} — ₦{item.price * item.quantity}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-bold">Total Paid: ₦{total}</p>
          </div>

          <Link to={`/${tenant}`} className="text-blue-600 underline">
            Return to Home
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default PaymentSuccess;
