import FluerNavbar from "../../components/fleur/FluerNavbar";
import FluerFooter from "../../components/fleur/FleurFooter";
import Container from "../../components/Container";
import { Link } from "react-router-dom";
import { fleurNavigation } from "../../utils/navLinks";

const FleurHome = () => {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://evelynbankz.github.io/brandisby./FleurDeVie/yourvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative  z-10">
        <FluerNavbar />
        <section className="w-full h-full">
          <Container>
            <div className="w-full h-screen  flex items-center justify-center">
              <ul className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
                {fleurNavigation.map((link) => (
                  <li
                    key={link.name}
                    className="text-3xl md:text-5xl font-semibold md:font-bold text-white"
                  >
                    <Link to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
        <FluerFooter />
      </div>
    </main>
  );
};

export default FleurHome;
