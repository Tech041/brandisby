import Hero from "../../components/Hero";
import MembershipAccess from "../../components/MembershipAccess";
import Methodology from "../../components/Methodology";
import Navbar from "../../components/Navbar";
import Subscriptions from "../../components/Subscriptions";
import Team from "../../components/Team";

const Home = () => {
  return (
    <main className="w-full min-h-screen  bg-[url('/images/team.webp')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      <Team />
      <Methodology />
      <Subscriptions />
      <MembershipAccess />
    </main>
  );
};

export default Home;
