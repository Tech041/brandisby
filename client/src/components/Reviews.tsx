import Container from "./Container";

const Reviews = () => {
  return (
    <section className="bg-amber-50 h-[400px]">
      <Container>
        <div className="w-full h-full">
          <h1 className="text-4xl lg:text-5xl text-center text-black">
            What our clients are saying
          </h1>
          <div className="pt-5">
            <h1 className="text-center text-red-600">Coming up soon ...</h1>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
