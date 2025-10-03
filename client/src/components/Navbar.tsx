
import Container from "./Container";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { desktopNavLinks, mobileNavLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import { useUiStore } from "../store/UiStore";

const Navbar = () => {
  const { toggleMobileNav, isMobileNavOpen } = useUiStore();
  return (
    <header className="w-full h-[80px] flex items-center bg-black text-white fixed border-b border-b-gray-700">
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
            <ul className="flex items-center gap-4 ">
              {desktopNavLinks.map((link) => (
                <li key={link.name} className="">
                  <Link className="text-lg font-semibold" to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Buttons */}
          <div className="flex items-center gap-5">
            <div className="">
              <Link className="hover:text-yellow-500 text-lg font-semibold" to={"/login"}>
                Login
              </Link>
            </div>
            <div className="">
              <Link
                className="px-6 py-3 bg-yellow-500 rounded-md text-lg font-semibold hover:bg-yellow-400 "
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
              className="flex-1 flex justify-end cursor-pointer "
            >
              {isMobileNavOpen ? (
                <IoCloseSharp size={30} color="white" />
              ) : (
                <GiHamburgerMenu size={30} color="white" />
              )}
            </div>
          </div>
          <nav
            className={` ${
              isMobileNavOpen ? "left-0 right-0" : "left-[-100%]"
            } absolute  top-[80px]  h-screen flex flex-col space-y-10  bg-black text-white px-8  z-50`}
          >
            <ul className=" h-screen flex flex-col pt-20 items-center gap-4 ">
              {mobileNavLinks.map((link) => (
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

export default Navbar;
