import Container from "./Container";

const Spinner = () => {
  return (
    <div className="w-full">
      <Container>
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-b-4 border-blue-600"></div>
          <p className="text-blue-800 text-center pt-5">
            Loading data, Please wait...
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Spinner;
