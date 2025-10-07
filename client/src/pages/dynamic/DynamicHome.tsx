import FluerNavbar from "../../components/fleur/FluerNavbar";
import FluerFooter from "../../components/fleur/FleurFooter";
import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import { dynamicNavigation } from "../../utils/navLinks";
import SeracNavbar from "../../components/serac/SeracNavbar";
import SeracFooter from "../../components/serac/SeracFooter";

const DynamicHome = () => {
  const { tenant } = useParams();

  return (
    <main className="w-full min-h-screen  ">
      <div className="w-full h-full bg-[url('/images/home.webp')] bg-cover bg-center bg-no-repeat flex flex-col relative  ">
        <div className="w-full ">
          {tenant === "fleurdevie" ? <FluerNavbar /> : <SeracNavbar />}
        </div>{" "}
        <section className="w-full h-screen flex-grow flex items-center justify-center relative ">
          <Container>
            <div className="w-full   flex items-center justify-center">
              <ul className="w-full flex flex-col md:flex-row items-center justify-center gap-8 absolute top-1/2">
                {dynamicNavigation.map((link) => (
                  <li
                    key={link.name}
                    className=" text-6xl lg:text-[100px]  text-white"
                  >
                    <Link className="border-b-2 border-b-gray-50 " to={link.path}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>
      </div>{" "}
      <div className="w-full ">
        {tenant === "fleurdevie" ? <FluerFooter /> : <SeracFooter />}
      </div>
    </main>
  );
};

export default DynamicHome;
