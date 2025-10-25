import Container from "../../components/Container";


export default function DynamicNotFound() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <Container>
        <div className="w-full h-full flex justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center px-4 text-center">
            <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
            <p className="text-xl text-red-400 mb-6">
              Oops! The page you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
