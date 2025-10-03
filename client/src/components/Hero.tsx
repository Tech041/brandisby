import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";

const Hero = () => {
  const isLoggedIn = false;
  return (
    <section className=" w-full h-screen bg-black text-white pt-20 flex items-center justify-center ">
      <Container>
        <div className="w-full h-full">
          <h1 className="text-3xl md:text-4xl xl:text-5xl text-center font-bold py-3">
            Welcome to Brandisby
          </h1>
          <p className="text-center py-3 text-lg md:text-xl text-gray-400">
            Create your store. Build your brand identity. Get your own unique
            page and share your creativity with the world.
          </p>
          <div className="flex justify-center items-center">
            <div className="mt-12">
              {isLoggedIn ? (
                <Link
                  className="text-green-600 px-4 lg:px-6 py-3 bg-white rounded-md"
                  to={"/dashboard"}
                >
                  Dashboard
                </Link>
              ) : (
                <Link
                  className="text-white px-4 lg:px-6 py-3 bg-yellow-500 hover:bg-yellow-400 rounded-md"
                  to={"/register"}
                >
                  Join Now
                </Link>
              )}
            </div>{" "}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
