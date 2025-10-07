import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Container from "./Container";
import { motion } from "framer-motion";

import { FaLinkedinIn } from "react-icons/fa";
import { desktopNavLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-amber-50 pt-5">
      <Container>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false }}
          className="w-full h-full"
        >
          {/* upper */}
          <div className="flex flex-col md:flex-row justify-center">
            {/* left */}
            <div className="flex-1 flex flex-col justify-between">
              <div className=" w-[85px] h-[50px] md:w-[100px] md:h-[50px] rounded-md overflow-hidden">
                <img
                  src="/images/logo.webp"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <p className="">Personalized business coaching</p>
              </div>
            </div>
            {/* middle */}
            <div className="flex-1 pb-2">
              <ul className="text-black flex flex-col md:items-center gap-2">
                {desktopNavLinks.map((link) => (
                  <li key={link.name} className="">
                    <Link className=" text-sm md:text-base" to={link.name}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>{" "}
            </div>
            {/* right */}
            <div className="flex-1 flex  md:justify-end gap-4 pb-4 pt-5 ">
              <Socials path="">
                <FaInstagram size={30} color="black" />
              </Socials>
              <Socials path="">
                <FaTiktok size={25} color="black" />
              </Socials>
              <Socials path="">
                <FaEnvelope size={30} color="black" />
              </Socials>
              <Socials path="">
                <FaLinkedinIn size={30} color="black" />
              </Socials>
              <Socials path="">
                <FiTwitter size={30} color="black" />
              </Socials>
            </div>
          </div>
          {/* lower */}
          <div className="">
            <p className="text-sm md:text-lg text-gray-800 text-center">
              &copy; [{new Date().getFullYear()}] Brandisby. All Rights
              Reserved.{" "}
            </p>
          </div>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
