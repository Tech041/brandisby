import { Link } from "react-router-dom";

const paragraphStyle = "text-center text-sm lg:text-base";
const headingStyle = "text-center text-lg md:text-xl lg:text-2xl font-bold ";
interface SubscriptionProp {
  heading: string;
  subHeading: string;
  description: string;
  path: string;
  destination: string;
}

const SubscriptionItem = ({
  heading,
  subHeading,
  description,
  path,
  destination,
}: SubscriptionProp) => {
  return (
    <div className="w-full h-full">
      <h2 className={headingStyle}>{heading}</h2>
      <h3 className="text-center pb-5  text-lg md:text-xl">{subHeading}</h3>
      <p className={paragraphStyle}>{description}</p>

      <div className="w-full h-[60px] flex justify-center items-center mt-10">
        <div className=" w-full h-full flex justify-center  items-center ">
          <Link
            className=" px-4 py-2 w-[150px] h-[50px] lg:h-full lg:w-[150px] flex items-center justify-center  text-white  bg-black hover:bg-black/50 "
            to={path}
          >
            {destination}
          </Link>
        </div>{" "}
      </div>
    </div>
  );
};

export default SubscriptionItem;
