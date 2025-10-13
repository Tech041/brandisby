import { FaTiktok } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";

import { FaLinkedinIn } from "react-icons/fa";
import Container from "../Container";
import Socials from "../Socials";
import { useParams } from "react-router-dom";

const SharedFooter = () => {
  const { tenant } = useParams();

  return (
    <footer className="w-full h-full bg-primary-200 text-primary-100 pt-5">
      <Container>
        <div className="w-full h-full">
          {/* upper */}
          <div className="flex flex-col md:flex-row justify-center">
            {/* left */}
            <div className="flex-1 flex justify-between">
              <div className="flex-1">
                <div className="font-light">
                  <h2 className="text-2xl py-3 text-center uppercase font-medium">
                    Contact
                  </h2>
                  <p className="lg:py-2 text-lg text-center">123 Demo Street</p>
                  <p className="text-lg text-center">New York, NY 12345</p>
                </div>
                <div className="pt-3 text-lg font-light">
                  <p className="text-center">email@example.com</p>
                  <p className=" text-center">(555) 555-5555</p>
                </div>
              </div>
              <div className=" flex-1 lg:hidden">
                <div className="text-lg font-light text-center">
                  <h1 className="text-2xl py-3 text-center uppercase font-medium">
                    Hours
                  </h1>
                  <p className="">Mon–Wed 6–11</p>
                  <p className="">Thu–Sat 4–12</p>
                  <p className="">Sun 3–10</p>
                </div>
              </div>
            </div>

            {/* middle */}
            <div className="flex-1 pb-2 hidden lg:block">
              <h2 className="text-primary-100 text-lg md:text-3xl md:text-center pt-4 pb-2 uppercase ">
                {`${tenant === "fleurdevie" ? "Fleurdevie" : "Serac"}`}
              </h2>
              <div className="flex-1 flex  md:justify-center gap-4 pb-4 pt-5 ">
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

            <div className="flex-1 pb-2 lg:hidden">
              <h2 className="text-primary-100   text-3xl text-center pt-4 pb-2 uppercase ">
                {`${tenant === "fleurdevie" ? "Fleurdevie" : "Serac"}`}
              </h2>
              <div className=" flex justify-center gap-4 pb-4 pt-5 ">
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
            {/* right */}
            <div className=" flex-1 hidden lg:block">
              <div className="text-lg font-light text-center">
                <h1 className="text-2xl py-3 text-center uppercase font-medium">
                  Hours
                </h1>
                <p className="">Mon–Wed 6–11</p>
                <p className="">Thu–Sat 4–12</p>
                <p className="">Sun 3–10</p>
              </div>
            </div>
          </div>
          {/* lower */}
          <div className="">
            <p className="text-sm md:text-lg  text-center font-light">
              {`${tenant === "fleurdevie" ? "Fleurdevie" : "Serac"}`}
              &copy; [{new Date().getFullYear()}] . All Rights Reserved.{" "}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default SharedFooter;
