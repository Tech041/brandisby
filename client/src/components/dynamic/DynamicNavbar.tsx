import Container from "../Container";
import { Link } from "react-router-dom";
import { useUiStore } from "../../store/UiStore";
import Socials from "../Socials";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { tenantNavLinks } from "../../utils/navLinks";
import { FaUserAlt } from "react-icons/fa";
import { useTenantStore } from "../../store/tenantSore";

const DynamicNavbar = () => {
  const { isMobileNavOpen, toggleMobileNav } = useUiStore();
  const { tenant } = useTenantStore();
  if (!tenant) return null;

  return (
    <header
      className={`w-full h-[150px] text-black  z-50 ${
        isMobileNavOpen ? "fixed" : "relative"
      }`}
    >
      <Container>
        {/* desktop */}
        <div className="hidden w-full h-full lg:flex items-center gap-5">
          {/* logo */}
          <div className="flex-1">
            <div className="w-[200px] h-[120px] rounded-md overflow-hidden">
              <Link
                className="w-full h-full flex items-center"
                to={`/${tenant.tenant_name}`}
              >
                <span className="text-4xl font-semibold text-gray-900">
                  {tenant.logo}
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <ul className="flex items- justify-end gap-5">
              {tenantNavLinks.map((link) => (
                <li key={link.name} className="text-lg md:text-xl  capitalize ">
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
              <li className="">
                <Socials path="">
                  <FaInstagram size={30} color="gray" />
                </Socials>
              </li>
              <li className="">
                <Socials path="">
                  <FiTwitter size={30} color="gray" />
                </Socials>
              </li>
              <div className="relative group">
                <li className="">
                  <Socials path="">
                    <FaUserAlt size={30} color="black" />
                  </Socials>
                </li>
                <div className="absolute hidden group-hover:block bg-gray-50 text-black pt-4 px-2 rounded">
                  <Link
                    className="text-nowrap text-gray-700"
                    to={`/${tenant.tenant_name}/sign-up`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
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
                  to={`/${tenant}`}
                >
                  <span className="text-sm text-center text-gray-900">
                    {tenant.logo}
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
        ${isMobileNavOpen ? "rotate-45 top-2.5 bg-black" : "top-1 bg-black"}`}
                />
                <span
                  className={`block absolute h-0.5 w-full  transform transition duration-300 ease-in-out
        ${isMobileNavOpen ? "-rotate-45 top-2.5 bg-black" : "top-4 bg-black"}`}
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
                <span className="">{tenant.logo}</span>
              </Link>
            </div>
            <ul className=" h-screen flex flex-col  items-center justify-center gap-4 ">
              {tenantNavLinks.map((link) => (
                <li
                  key={link.name}
                  className="py-3 text-2xl font-bold capitalize"
                >
                  <Link to={link.path}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default DynamicNavbar;
