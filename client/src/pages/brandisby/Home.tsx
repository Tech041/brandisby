import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <main className="w-full min-h-screen  bg-[url('/images/fleur_hero.webp')] bg-cover bg-no-repeat">
      <Navbar />
      <Hero />
    </main>
  );
};

export default Home;
