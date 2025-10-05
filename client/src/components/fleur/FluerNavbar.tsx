import { IoCloseSharp } from "react-icons/io5";
import Container from "../Container";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useUiStore } from "../../store/UiStore";
import { fleurmobileNavLinks } from "../../utils/navLinks";
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
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();
  return (
    <header className="w-full h-[150px] text-white fixed z-50">
      <Container>
        {/* desktop */}
        <div className="hidden w-full h-full md:flex items-center gap-5">
          {/* logo */}
          <div className="flex-1">
            <div className="w-[200px] h-[120px] rounded-md overflow-hidden">
              <Link className="w-full h-full" to={"/fleurdevie/home"}>
                <img
                  src="/images/fleur_logo.webp"
                  className="w-full h-full object-cover"
                  alt="logo"
                />
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <h1 className=" font-bold text-3xl md:text-5xl">Fleur De Vie</h1>
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
        {/* mobile navbar */}
        <div className="w-full h-full flex md:hidden   ">
          <div className="w-full h-full flex justify-between items-center  ">
            <div className="flex-1  cursor-pointer ">
              <div className="w-[100px] h-[50px] rounded-md overflow-hidden">
                <Link className="w-full h-full" to={"/fleurdevie/home"}>
                  <img
                    src="/images/fleur_logo.webp"
                    className="w-full h-full object-cover"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div
              onClick={toggleMobileNav}
              className="flex-1 flex justify-end cursor-pointer  z-50"
            >
              {isMobileNavOpen ? (
                <IoCloseSharp size={30} color="black" />
              ) : (
                <GiHamburgerMenu size={30} color="white" className="" />
              )}
            </div>
          </div>
          <nav
            className={` ${
              isMobileNavOpen ? "left-0 right-0" : "left-[-100%]"
            } absolute  top-0  h-screen flex flex-col space-y-10  bg-white text-yellow-600 px-8  z-30`}
          >
            <ul className=" h-screen flex flex-col  items-center justify-center gap-4 ">
              {fleurmobileNavLinks.map((link) => (
                <li key={link.name} className="py-3 text-2xl font-bold">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
            {/* mobile socials */}
            {/* <div className="flex items-center gap-5">
                        <a href={navPaths.linkedin} className="">
                          <Image
                            src={"/icons/linkedin2.png"}
                            width={24}
                            height={24}
                            alt="linkedin_icon"
                          />
                        </a>
                        <a href={navPaths.facebook} className="">
                          <Image
                            src={"/icons/facebook2.png"}
                            width={24}
                            height={24}
                            alt="facebook_icon"
                          />
                        </a>
                        <a href={navPaths.instagram} className="">
                          <Image
                            src={"/icons/instagram2.png"}
                            width={24}
                            height={24}
                            alt="instagram_icon"
                          />
                        </a>
                      </div> */}
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default FluerNavbar;
