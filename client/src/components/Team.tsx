import Container from "./Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <section className="w-full min-h-screen bg-amber-50">
      <Container>
        <div className="w-full h-[800px] flex flex-col lg:flex-row items-center">
          {/* left */}
          <div className=" flex-1 w-full h-full flex items-center justify-center">
            <div className="lg:px-12 ">
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="z-0 relative"
              >
                <h1 className="text-5xl lg:text-7xl py-4 pb- lg:pb-0">
                  We’re here to help you thrive
                </h1>
              </motion.div>

              <div className="  w-full h-[400px]   lg:hidden">
                <img
                  src="/images/team.webp"
                  alt="image"
                  className="w-full h-full object-cover"
                />
              </div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
                className="z-0 relative"
              >
                {" "}
                <p className=" w-full py-4 mt-4 lg:mt-10 text-sm lg:text-base">
                  After years of personal and professional experience, we
                  founded Bloom Coaching to help individuals and teams make
                  their business dreams a reality. With our comprehensive guided
                  resources, you’ll unearth renewed confidence and tactics to
                  help your business thrive.
                </p>
              </motion.div>

              <div className="w-full h-[70px] mt-3 lg:mt-10">
                <Link
                  className=" px-4 py-2 w-[150px] h-[50px] lg:h-full lg:w-[250px] flex items-center justify-center  text-white  bg-black hover:bg-black/50 "
                  to={"/learn-more"}
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
          {/* right */}
          <div className=" flex-1 w-full h-full  hidden lg:block  ">
            <img
              src="/images/team.webp"
              alt="image"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;
