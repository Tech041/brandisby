import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";
import Team from "../../components/Team";

const Home = () => {
  return (
    <main className="w-full min-h-screen  bg-gray-300 bg-cover bg-no-repeat">
      <Navbar />
      <Hero />
      <Team />
    </main>
  );
};

export default Home;
