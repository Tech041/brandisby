import Container from "./Container";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const BusinessAction = () => {
  return (
    <section className="w-full bg-[url('/images/office5.webp')] bg-cover bg-center bg-no-repeat">
      <Container>
        <div className="w-full h-full">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false }}
            className="w-full h-full"
          >
            <h1 className=" text-6xl lg:text-[120px] text-center text-white  py-3">
              Let’s kickstart your business
            </h1>
            <h2 className="text-sm lg:text-xl text-center text-white  py-3">
              We’ll be with you every step of the way.
            </h2>
          </motion.div>

          <div className="w-full h-[70px] flex justify-center items-center mt-4">
            <div className=" w-full h-full flex justify-center  items-center">
              <Link
                className=" px-4 py-2 w-[150px] h-[50px] lg:h-full lg:w-[300px] flex items-center justify-center  text-black  bg-yellow-300 hover:bg-yellow-300/50 "
                to={"/register"}
              >
                Join Now
              </Link>
            </div>{" "}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default BusinessAction;
