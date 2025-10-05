import Container from "./Container";
import { Link } from "react-router-dom";

const Hero = () => {
  const isLoggedIn = false;
  return (
    <section className=" w-full h-screen text-white pt-20 flex items-center justify-center ">
      <Container>
        <div className="w-full h-full">
          <h1 className=" text-4xl md:text-5xl lg:text-[120px] text-center text-white  py-3">
            Take control of your business
          </h1>

          <div className="w-full h-[80px] flex justify-center items-center ">
            <div className=" w-full h-full flex justify-center  items-center">
              <Link
                className=" px-4 py-2 h-[50px] lg:h-full lg:w-[250px] flex items-center justify-center  text-black  bg-yellow-300 "
                to={`${isLoggedIn ? "/dashboard" : "Join Now"}`}
              >
                {isLoggedIn ? "Dashboard" : "Join Now"}
              </Link>
            </div>{" "}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
