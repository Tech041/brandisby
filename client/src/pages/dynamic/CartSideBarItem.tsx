import { IoCloseSharp } from "react-icons/io5";

interface CartProp {
  src: string;
  alt: string;
  productName: string;
  quantity: number;
  price: number;
  remove: () => void;
}

const CartSideBarItem = ({
  src,
  alt,
  productName,
  quantity,
  price,
  remove,
}: CartProp) => {
  return (
    <div className="w-full h-full flex pb-2">
      <div className=" h-[120px] w-full flex border-b border-b-gray-400">
        <div className=" flex-1 h-full">
          <img src={src} alt={alt} className="w-full h-full object-contain" />
        </div>
        <div className="hidden flex-[2] h-full md:flex flex-col justify-center items-center">
          <h2 className="py-3">{productName}</h2>
          <p className="font-semibold">
            {quantity} x {price}
          </p>
        </div>
        <div className="flex-1 flex justify-end h-full">
          <IoCloseSharp
            onClick={remove}
            color="gray"
            size={20}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default CartSideBarItem;
