import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Team from "../../components/Team";

const Home = () => {
  return (
    <main className="w-full min-h-screen  bg-[url('/images/team.webp')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <Hero />
      <Team />
    </main>
  );
};

export default Home;
