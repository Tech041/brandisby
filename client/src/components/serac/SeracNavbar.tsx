import Container from "../Container";
import { Link } from "react-router-dom";

import { useUiStore } from "../../store/UiStore";
import { fleurmobileNavLinks } from "../../utils/navLinks";
import Socials from "../Socials";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

const SeracNavbar = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();
  return (
    <header
      className={`w-full h-[150px] text-white  z-50 ${
        isMobileNavOpen ? "fixed" : "relative"
      }`}
    >
      <Container>
        {/* desktop */}
        <div className="hidden w-full h-full lg:flex items-center gap-5">
          {/* logo */}
          <div className="flex-1 w-full">
            <div className="w-[300px] h-[130px]  rounded-md overflow-hidden">
              <Link
                className="w-full  h-full flex items-center"
                to={"/serac/home"}
              >
                {/* <img
                  src="/images/serac_logo.webp"
                  className="w-full h-full object-cover"
                  alt="logo"
                /> */}
                <span className="text-5xl font-semibold text-white">Serac</span>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <ul className="flex items- justify-end gap-5">
              {fleurmobileNavLinks.map((link) => (
                <li key={link.name} className="text-lg md:text-xl  capitalize ">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
              <li className="">
                <Socials path="">
                  <FaInstagram size={30} color="white" />
                </Socials>
              </li>
              <li className="">
                <Socials path="">
                  <FiTwitter size={30} color="white" />
                </Socials>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="w-full h-full flex lg:hidden   ">
          <div className="w-full h-full flex justify-between items-center  ">
            <div className="flex-1  cursor-pointer ">
              <div className="w-[100px] h-[100px] rounded-md overflow-hidden">
                <Link
                  className="w-full h-full flex flex-col justify-center"
                  to={"/serac/home"}
                >
                  <img
                    src="/images/serac_logo.webp"
                    className="w-full h-[30px] object-cover"
                    alt="logo"
                  />
                  <span className="text-sm text-center text-yellow-900">
                    Serac
                  </span>
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
            } absolute  top-0  h-screen flex flex-col space-y-10  bg-white text-yellow-600 px-8  z-30`}
          >
            <div className="w-[100px] h-[50px] rounded-md overflow-hidden mt-10">
              <Link to={"/"}>
                <img
                  src="/images/fleur_logo.webp"
                  className="w-full h-full object-cover"
                  alt="logo"
                />
              </Link>
            </div>
            <ul className=" h-screen flex flex-col  items-center justify-center gap-4 ">
              {fleurmobileNavLinks.map((link) => (
                <li
                  key={link.name}
                  className="py-3 text-2xl font-bold capitalize"
                >
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

export default SeracNavbar;
