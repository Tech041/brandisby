import { Link } from "react-router-dom";
import Container from "./Container";

const MembershipAccess = () => {
  return (
    <section className="w-full  h-[500px] flex items-center bg-[url('/images/office7.webp')]  bg-center bg-cover bg-no-repeat">
      <Container>
        <div className=" w-[70%] md:w-[50%] h-full  flex items-center">
          <div className="w-full">
            <h1 className=" text-2xl md:text-3xl lg:text-5xl text-white">
              Get unlimited access to our full suite of programs when you become
              a member.
            </h1>
            <div className="w-full h-[70px] flex items-center mt-14">
              <div className=" w-full h-full flex   items-center">
                <Link
                  className=" px-4 py-2 w-[150px] h-[50px] lg:h-full lg:w-[250px] flex items-center justify-center  text-black  bg-yellow-300 hover:bg-yellow-300/50 "
                  to={"/explore"}
                >
                  Explore Programs
                </Link>
              </div>{" "}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MembershipAccess;
