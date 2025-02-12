import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosClose, IoIosRemove, IoIosAdd } from "react-icons/io";
import { CartContext } from "../Contexts/CartContext";

const CartItem = ({ items }) => {
  const { image, title, price, amount, id } = items;
  const { removeFromCart, increaseAmount,decreaseAmount } = useContext(CartContext);

  return (
    <div className="relative flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-200 bg-white shadow-sm rounded-lg mb-4">
      {/* Close (X) Button */}
      <button
        onClick={() => removeFromCart(id)}
        className="absolute top-2 right-2 text-gray-500 hover:text-red-500 transition cursor-pointer border border-gray-300 p-2 rounded-full bg-gray-50 hover:bg-gray-200"
      >
        <IoIosClose />
      </button>

      {/* Left Section: Image & Details */}
      <div className="flex items-start gap-4 w-full">
        {/* Product Image */}
        <div className="flex justify-center items-center" style={{ width: '80px', height: '80px' }}>
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={`Image of ${title}`}
              className="w-full h-full object-contain"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
          </Link>
        </div>

        {/* Title & Price Controls */}
        <div className="flex flex-col justify-between w-full">
          {/* Product Title */}
          <div className="text-[12px] text-gray-700 uppercase max-w-[170px] font-bold">
            <Link to={`/product/${id}`} className="hover:text-blue-600 hover:underline">
              {title}
            </Link>
          </div>

          {/* Quantity & Price Controls */}
          <div className="flex items-center justify-between gap-4 mt-2">
            <div className="flex items-center gap-2">
              {/* Decrease Button */}
              <button
                onClick={()=>decreaseAmount(id)}
               className="cursor-pointer border border-gray-300 p-2 rounded-md bg-gray-50 hover:bg-gray-200 transition">
                <IoIosRemove />
              </button>

              {/* Quantity */}
              <div className="border border-gray-300 px-4 py-1 rounded-md text-center text-gray-700 font-semibold bg-gray-50">
                {amount}
              </div>

              {/* Increase Button */}
              <button
                onClick={() => increaseAmount(id)}
                className="cursor-pointer border border-gray-300 p-2 rounded-md bg-gray-50 hover:bg-gray-200 transition"
              >
                <IoIosAdd />
              </button>
            </div>

            {/* Prices */}
            <div className="flex flex-col text-gray-700 ml-4 text-right">
              <span className="font-semibold text-gray-900">
                {`$${parseFloat(price * amount).toFixed(2)}`}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;