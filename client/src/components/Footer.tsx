import React from "react";
import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import Container from "./Container";

import { FaLinkedinIn } from "react-icons/fa";
import { desktopNavLinks } from "../utils/navLinks";
import { Link } from "react-router-dom";
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black border-t border-t-gray-700 pt-5">
      <Container>
        <div className="w-full h-full">
          {/* upper */}
          <div className="flex flex-col md:flex-row justify-center">
            <div className="flex-1">
              <div className="w-[100px] h-[50px] rounded-md overflow-hidden">
                <img
                  src="/images/logo.webp"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 pb-2">
              <h2 className="text-white font-semibold text-lg md:text-xl md:text-center pt-4 pb-2">
                Quick Links
              </h2>
              <ul className="text-gray-300 flex flex-col md:items-center gap-2">
                {desktopNavLinks.map((link) => (
                  <li key={link.name} className="">
                    <Link className="underline" to={link.name}>
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
            <p className="text-lg text-gray-500 text-center">
              &copy; [{new Date().getFullYear()}] Brandisby. All Rights
              Reserved.{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
