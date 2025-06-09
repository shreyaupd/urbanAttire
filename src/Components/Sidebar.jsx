import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import TrashIcon from '@rsuite/icons/Trash';
import CartItem from "../Components/CartItem";
import { SidebarContext } from "../Contexts/SidebarContext";
import { CartContext } from "../Contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart,total } = useContext(CartContext);
  const sidebarOpenClose = () => (isOpen ? "right-0" : "-right-full");
  const navigate = useNavigate();
  const handelcheckout = () => {
    if (cart.length === 0) {
      handleClose()
      navigate("/")
      return;
    }
    navigate("/thank-you");
    handleClose();
    clearCart();

  }
  return (
    <div
      className={`w-full h-full shadow-2xl fixed top-0 md:max-w-[450px] xl:max-w-[400px] transition-all duration-300 z-50 px-4 lg:px-[35px] bg-[#F9F6EE] ${sidebarOpenClose()}`}
    >
      <div className=" -ml-[10px] flex justify-between items-center mt-[20px] py-2 border-b-3 border-gray-400  ">
        <div className="capitalize font-bold">Shopping Bag</div>

        <div
          onClick={handleClose}
          className="cursor-pointer hover:scale-120 transition-all w-8 h-8 flex justify-center items-center "
        >
          <FaArrowRight />
        </div>
      </div>
      <div className="flex flex-col gap-y-3 py-4 mt-4 overflow-y-auto overflow-x-hidden max-h-[75vh]">
        {cart.map((item) => (
          <CartItem items={item} key={item.id} />
        ))}
      </div>
      {/* total */}
      <div className="flex flex-col gap-y-3 py-4 mt-4 ">
        <div className="flex justify-between items-center">
          <div className="uppercase font-semibold"> 
          <span className="mr-2">Total:</span>${parseFloat(total).toFixed(2)}
          </div>
        {/* trash */}
         <div onClick={clearCart}  className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"> 
           <TrashIcon/>
        </div>
        </div>
        <div className="relative cursor-pointer flex justify-center item-center size-full rounded-md bg-pink-900/70 h-15 hover:bg-pink-900/90 transition-colors duration-200" onClick={handelcheckout}>
          
            <button className=" text-white text-lg font-semibold rounded-lg" > Checkout</button>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;