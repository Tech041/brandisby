import Container from "./Container";
import SubscriptionCard from "./SubscriptionCard";

const Subscriptions = () => {
  return (
    <section className="w-full h-full bg-amber-50">
      <Container>
        <div className="w-full h-full">
          <h1 className="text-black text-4xl lg:text-5xl text-center py-5">
            Choose your starting point
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl underline text-center text-black py-2">
            Explore memberships & class packs
          </p>
          <SubscriptionCard />
        </div>
      </Container>
    </section>
  );
};

export default Subscriptions;
