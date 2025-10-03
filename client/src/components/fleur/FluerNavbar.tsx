import Container from "../Container";
import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Shop",
    path: "/shop",
  },
  {
    name: "Contact Us",
    path: "/contact",
  },
];

const FluerNavbar = () => {
  return (
    <header className="w-full h-[150px] text-[#112e1f]">
      <Container>
        <div className="w-full h-full flex items-center gap-5">
          {/* logo */}
          <div className="flex-1">
            <div className="w-[200px] h-[120px] rounded-md overflow-hidden">
              <img
                src="/images/fleur_logo.webp"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <h1 className="text-black/70 font-bold text-3xl md:text-5xl">
              Fleur De Vie
            </h1>
          </div>
          <div className="flex-1">
            <ul className="flex items-center gap-5">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-lg md:text-xl font-semibold "
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default FluerNavbar;
