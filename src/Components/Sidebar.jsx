import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import CartItem from "../Components/CartItem";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";
const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart } = useContext(CartContext);
  const sidebarOpenClose = () => (isOpen ? "right-0" : "-right-full");
  return (
    <div
      className={`w-full h-full bg-white shadow-2xl fixed top-0 md:max-w-[450px] xl:max-w-[400px] transition-all duration-300 z-20 px-4 lg:px-[35px] ${sidebarOpenClose()}`}
    >
      <div className=" -ml-[10px] flex justify-between items-center mt-[20px] py-2 border-b-3 border-gray-400">
        <div className="capitalize font-bold">Shopping Bag(0)</div>

        <div
          onClick={handleClose}
          className="cursor-pointer hover:scale-120 transition-all w-8 h-8 flex justify-center items-center "
        >
          <FaArrowRight />
        </div>
      </div>
      <div>
        {cart.map((item) => (
          <CartItem items={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
