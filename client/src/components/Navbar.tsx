import Container from "./Container";
import { desktopNavLinks, mobileNavLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import { useUiStore } from "../store/UiStore";

const Navbar = () => {
  const { toggleMobileNav, isMobileNavOpen } = useUiStore();
  return (
    <header
      className={`w-full h-[80px] flex items-center text-white pt-10  z-50 ${
        isMobileNavOpen ? "fixed" : "relative"
      }  `}
    >
      <Container>
        {/* Desktop navbar */}
        <div className="hidden  w-full h-full md:flex justify-between items-center">
          {/* Logo */}
          <div className="w-[100px] h-[50px] rounded-md overflow-hidden">
            <img
              src="/images/logo.webp"
              className="w-full h-full object-cover"
            />
          </div>
          {/* NavLinks */}
          <div className="flex items-center justify-center">
            <ul className="flex items-center gap-6 text-white ">
              {desktopNavLinks.map((link) => (
                <li key={link.name} className="">
                  <Link className="text-sm font-semibold" to={link.path}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-5">
            <div className="">
              <Link
                className="text-white text-sm font-semibold"
                to={"/login"}
              >
                Login
              </Link>
            </div>
            <div className="">
              <Link
                className="px-6 py-4 bg-yellow-300 text-black  text-sm font-semibold hover:bg-yellow-300/50 "
                to={"/register"}
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        <div className="w-full flex md:hidden   ">
          <div className="w-full h-full flex justify-between items-center  ">
            <div className="flex-1  cursor-pointer ">
              <div className="w-[85px] h-[50px] rounded-md overflow-hidden">
                <Link to={"/"}>
                  <img
                    src="/images/logo.webp"
                    className="w-full h-full object-cover"
                    alt="footer_icon"
                  />
                </Link>
              </div>
            </div>
            <div
              onClick={toggleMobileNav}
              className="flex justify-end items-center cursor-pointer z-50 w-10 h-10 relative"
            >
              <div className="relative w-10 h-6">
                <span
                  className={`block absolute h-0.5 w-full  transform transition duration-300 ease-in-out
        ${isMobileNavOpen ? "rotate-45 top-2.5 bg-black" : "top-1 bg-white"}`}
                />
                <span
                  className={`block absolute h-0.5 w-full  transform transition duration-300 ease-in-out
        ${isMobileNavOpen ? "-rotate-45 top-2.5 bg-black" : "top-4 bg-white"}`}
                />
              </div>
            </div>
          </div>
          <nav
            className={` ${
              isMobileNavOpen ? "left-0 right-0" : "left-[-100%]"
            } absolute  top-0  min-h-screen flex flex-col space-y-10  bg-[#e3e5d6] text-black px-8 `}
          >
            <div className="mt-10">
              <div className="w-[85px] h-[50px] rounded-md overflow-hidden">
                <Link to={"/"}>
                  <img
                    src="/images/logo.webp"
                    className="w-full h-full object-cover"
                    alt="footer_icon"
                  />
                </Link>
              </div>
            </div>
            <ul className=" flex flex-col pt-5 items-center gap-4 ">
              {mobileNavLinks.map((link) => (
                <li key={link.name} className="py-3 text-3xl font-semibold">
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

export default Navbar;
