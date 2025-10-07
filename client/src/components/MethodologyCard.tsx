import { motion } from "framer-motion";

const paragraphStyle = "text-center text-sm lg:text-base";
const headingStyle = "text-center text-lg md:text-xl lg:text-2xl pb-5";

const MethodologyCard = () => {
  return (
    <div className="w-full h-full lg:h-[450px] flex items-center bg-[url('/images/palm_leaf.webp')] bg-center bg-cover  pb-10 lg:pb-0">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full lg:px-4"
      >
        <div className=" ">
          <h1 className="text-5xl lg:text-7xl text-white text-center pt-6 lg:py-0 ">
            Overcome your obstacles
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row items-center   text-gray-100 px-14 lg:px-0 pt-20">
          <div className="flex-1">
            <h2 className={headingStyle}>Identify your starting point</h2>
            <p className={paragraphStyle}>
              What is step one when creating a business? It’s not as hard as you
              think.
            </p>
          </div>
          <div className="flex-1 py-4 lg:py-0">
            <h2 className={headingStyle}>Bring your ideas to life</h2>
            <p className={paragraphStyle}>
              Remember those amazing ideas locked up inside your mind? Make them
              real.
            </p>
          </div>
          <div className="flex-1  py-4 lg:py-0">
            <h2 className={headingStyle}>Sell your vision to others</h2>
            <p className={paragraphStyle}>
              Learn to present yourself and your concepts with confidence.
            </p>
          </div>
          <div className="flex-1  py-4 lg:py-0 ">
            <h2 className={headingStyle}>Expand your business</h2>
            <p className={paragraphStyle}>
              Break through walls to turn your small working business into an
              empire.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MethodologyCard;
