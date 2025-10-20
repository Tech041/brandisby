import { Link } from "react-router-dom";

const ShippingForm = () => {
  return (
    <form className="w-full h-full">
      <div className="flex justify-between">
        <p className="text-base md:text-xl  font-semibold text-black">
          Contact
        </p>
        <p className="">
          <Link className="underline " to={"#"}>
            Sign In
          </Link>
        </p>
      </div>
      <div className="w-full my-2">
        <input
          type="text"
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Email"
        />
      </div>
      <div className="my-2">
        <label htmlFor="" className="">
          Delivery
        </label>
        <div className="w-full ">
          <input
            type="text"
            className="px-4 py-3 border border-gray-300 rounded-lg w-full"
            placeholder="Country"
          />
        </div>
      </div>
      <div className="w-full my-2">
        <input
          type="text"
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Name"
        />
      </div>
      <div className="w-full my-2">
        <input
          type="text"
          className="px-4 py-3 border border-gray-300 rounded-lg w-full"
          placeholder="Address ..."
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-2 lg:gap-4 my-2">
        <div className="w-full mt-1">
          <input
            type="text"
            className="px-4 py-3 border border-gray-300 rounded-lg w-full"
            placeholder="City"
          />
        </div>
        <div className="w-full mt-1">
          <input
            type="text"
            className="px-4 py-3 border border-gray-300 rounded-lg w-full"
            placeholder="State"
          />
        </div>
      </div>
    </form>
  );
};

export default ShippingForm;
