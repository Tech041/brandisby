import Container from "../../components/Container";
import { Link } from "react-router-dom";

export default function DynamicNotFound() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Container>
        <div className="w-full h-full flex justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <p className="text-xl text-gray-600 mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>

            <Link
              to="/"
              className="px-6 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
            >
              Go to Main Site
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
