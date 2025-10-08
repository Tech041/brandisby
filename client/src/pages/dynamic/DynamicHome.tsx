import Container from "../../components/Container";
import { Link, useParams } from "react-router-dom";
import { dynamicNavigation } from "../../utils/navLinks";
import DynamicNavbar from "../../components/dynamic/DynamicNavbar";
import DynamicFooter from "../../components/dynamic/DynamicFooter";

const DynamicHome = () => {
  const { tenant } = useParams();

  return (
    <main className="w-full min-h-screen  ">
      <div
        className={`w-full h-full ${
          tenant === "fleurdevie"
            ? "bg-[url('/images/background.webp')]"
            : "bg-[url('/images/background2.webp')]"
        } bg-cover bg-center bg-no-repeat flex flex-col relative`}
      >
        <div className="w-full ">
          <DynamicNavbar />
        </div>{" "}
        <section className="w-full h-screen flex-grow flex items-center justify-center  ">
          <Container>
            <div className="w-full  flex flex-col items-center justify-center">
              <div className="w-full flex justify-center">
                <ul className="w-full flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-0  lg:px-20 ">
                  {dynamicNavigation.map((link) => (
                    <li
                      key={link.name}
                      className=" text-6xl lg:text-[100px]  text-white"
                    >
                      <Link
                        className="border-b-2 border-b-gray-50 "
                        to={link.path}
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-white text-xl lg:text-2xl mt-10 px-2 text-center ">
                123 Demo Street — New York, NY — (555) 555-5555
              </p>
            </div>
          </Container>
        </section>
      </div>{" "}
      <div className="w-full ">
        <DynamicFooter />
      </div>
    </main>
  );
};

export default DynamicHome;
