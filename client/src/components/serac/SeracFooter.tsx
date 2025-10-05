import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

import { fleurmobileNavLinks } from "../../utils/navLinks";
import Container from "../Container";
import Socials from "../Socials";

const SeracFooter = () => {
  return (
    <footer className="w-full h-full text-white pt-5">
      <Container>
        <div className="w-full h-full">
          {/* upper */}
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex-1">
              <div className=" md:w-[200px] md:h-[120px] w-[100px] h-[50px] rounded-md overflow-hidden">
                <Link className="w-full h-full" to={"/serac/home"}>
                  <img
                    src="/images/serac_logo.webp"
                    className="w-full h-full object-cover"
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="flex-1 pb-2">
              <h2 className="text-white font-semibold text-lg md:text-xl md:text-center pt-4 pb-2">
                Quick Links
              </h2>
              <ul className=" flex flex-col md:items-center gap-2">
                {fleurmobileNavLinks.map((link) => (
                  <li key={link.name} className="">
                    <Link className=" text-sm md:text-base" to={link.name}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            <div className="flex-1 flex  md:justify-end gap-4 pb-4 pt-5 ">
              <Socials path="">
                <FaInstagram size={30} color="white" />
              </Socials>
              <Socials path="">
                <FaTiktok size={25} color="white" />
              </Socials>
              <Socials path="">
                <FaEnvelope size={30} color="white" />
              </Socials>
              <Socials path="">
                <FaLinkedinIn size={30} color="white" />
              </Socials>
              <Socials path="">
                <FiTwitter size={30} color="white" />
              </Socials>
            </div>
          </div>
          {/* lower */}
          <div className="">
            <p className="text-sm md:text-lg  text-center">
              &copy; [{new Date().getFullYear()}]{" "}
              <span className="text-yellow-600">Sérac</span> . All Rights
              Reserved.{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default SeracFooter;
