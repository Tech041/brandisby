const CartSideBarItem = () => {
  return (
    <div className="w-full h-full flex">
      <div className=" h-[120px] w-full flex border-b border-b-gray-400">
        <div className=" flex-1 h-full">
          <img
            src="/images/image3.jpeg"
            alt="product image"
            className="w-full h-full object-contain"
          />
        </div>
        <div className=" flex-[2] h-full flex flex-col justify-center items-center">
          <h2 className="py-3">Seramic cup</h2>
          <p className="">1 x $500</p>
        </div>
        <div className="flex-1 flex justify-end h-full">icon</div>
      </div>
    </div>
  );
};

export default CartSideBarItem;
