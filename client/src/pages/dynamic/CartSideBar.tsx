import CartSideBarItem from "./CartSideBarItem";

const CartSideBar = () => {
  return (
    <div className="w-full max-h-[320px] flex flex-col gap-3 overflow-y-scroll ">
      <CartSideBarItem />
      <CartSideBarItem />
      <CartSideBarItem />
      <CartSideBarItem />

      <div className="">lower</div>
    </div>
  );
};

export default CartSideBar;
