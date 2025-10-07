import Container from "./Container";
import MethodologyCard from "./MethodologyCard";

const Methodology = () => {
  return (
    <section className="w-full h-full bg-amber-50">
      <Container>
        <div className="w-full h-full">
          <MethodologyCard />
        </div>
      </Container>
    </section>
  );
};

export default Methodology;
