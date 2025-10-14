import Container from "../Container";
import { Link, useParams } from "react-router-dom";
import { useUiStore } from "../../store/UiStore";
import Socials from "../Socials";
import { tenantNavLinks } from "../../utils/navLinks";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useCartStore } from "../../store/cartStore";

const SharedNavbar = () => {
  const { tenant } = useParams();

  const { isMobileNavOpen, toggleMobileNav } = useUiStore();
  const { cart } = useCartStore();
  const itemCount = Object.values(cart).reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header
      className={`w-full h-[100px] bg-white text-primary-100 border-b border-dotted border-b-gray-200  z-50 ${
        isMobileNavOpen ? "fixed top-0" : "relative"
      }`}
    >
      <Container>
        {/* desktop */}
        <div className="hidden w-full h-full md:flex items-center gap-5">
          {/* logo */}
          <div className="flex-1">
            <div className="w-[200px]  rounded-md overflow-hidden">
              <Link
                className="w-full h-full flex items-center"
                to={`${tenant === "fleurdevie" ? "/fleurdevie" : "/serac"}`}
              >
                <span className="text-4xl font-semibold text-primary-100">
                  {`${tenant === "fleurdevie" ? "Fleurdevie" : "Serac"}`}
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-1">
            <ul className="flex items- justify-end gap-5">
              <div className="relative group">
                <li className="">
                  <Socials path="">
                    <FaUserAlt size={30} color="gray" />
                  </Socials>
                </li>
                <div className="absolute left-[-15px] hidden group-hover:block bg-white text-black pt-2 px-2 rounded">
                  <Link
                    className="text-nowrap text-gray-800"
                    to={`/${tenant}/sign-up`}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>

              <li className="">
                <IoSearchOutline size={30} color="gray" />
              </li>
              <li className="">
                <CiHeart size={30} color="gray" />
              </li>
              <li className="relative">
                <Link to={`/${tenant}/product/cart`}>
                  <HiOutlineShoppingBag size={30} color="gray" />
                  <span className="absolute top-[-10px] right-0 bg-red-600 h-5 w-5 flex items-center justify-center text-sm text-white rounded-full">
                    {itemCount}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* mobile navbar */}
        <div className="w-full h-full flex md:hidden   ">
          {/* for shadow when navbar is open */}
          {isMobileNavOpen && (
            <div
              onClick={toggleMobileNav}
              className="fixed top-0 left-0 w-full h-screen bg-black/5 transition-opacity duration-700"
            />
          )}
          <div className="w-full h-full flex justify-between items-center  ">
            <div className="flex-1   cursor-pointer ">
              <div className="w-[100px] h-[100px] rounded-md overflow-hidden">
                <Link
                  className="w-full h-full flex flex-col justify-center"
                  to={`${tenant === "fleurdevie" ? "/fleurdevie" : "/serac"}`}
                >
                  <span className="text-xl font-semibold text-center text-primary-100">
                    {`${tenant === "fleurdevie" ? "Fleurdevie" : "Serac"}`}
                  </span>
                </Link>
              </div>
            </div>
            {!isMobileNavOpen && (
              <div className="pb-3 relative">
                <Link to={`/${tenant}/product/cart`}>
                  <HiOutlineShoppingBag size={30} color="gray" />
                  <span className="absolute top-[-10px] right-0 bg-red-600 h-5 w-5 flex items-center justify-center text-sm text-white rounded-full">
                    {itemCount}
                  </span>
                </Link>
              </div>
            )}

            <div
              onClick={toggleMobileNav}
              className="flex justify-end items-center cursor-pointer gap-2 z-50  h-12 "
            >
              <div className="relative w-10 h-10">
                {!isMobileNavOpen ? (
                  <GiHamburgerMenu size={30} color="gray" />
                ) : (
                  <MdOutlineClose size={30} color="gray" />
                )}
              </div>
            </div>
          </div>
          <nav
            className={` ${
              isMobileNavOpen ? "left-0 right-0" : "left-[-100%]"
            } absolute  top-0 w-full sm:w-[70%] md:w-[50%]  h-screen flex flex-col space-y-10  bg-white z-40 transition-all duration-700 text-gray-600 px-8 `}
          >
            {" "}
            <div className="w-full mt-28 ">
              <input
                type="text"
                className="w-full py-2 px-4 border border-gray-200 rounded-full placeholder:text-gray-500 outline-none"
                placeholder="Search our store"
              />
            </div>
            <ul className="  flex flex-col  justify-center gap-3 ">
              {tenantNavLinks.map((link) => (
                <li
                  key={link.name}
                  className="py-3 text-xl font-bold capitalize"
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

export default SharedNavbar;
