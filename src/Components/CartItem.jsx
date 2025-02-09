import React from "react";
import { Link } from "react-router-dom";
import { IoIosClose, IoIosRemove } from "react-icons/io";

const CartItem = ({ items }) => {
  const { image, title, price, amount, id } = items;

  return (
    <div className="flex justify-between p-4 border-b border-gray-200">
      {/* Image, Title, and Price Wrapper */}
      <div className="flex items-start gap-4">
        {/* Image Container */}
        <div className="w-20 h-20 flex justify-center items-center">
          <Link to={`/product/${id}`}>
            <img
              src={image}
              alt={`Image of ${title}`}
              className="w-full h-full object-contain rounded-md aspect-square"
            />
          </Link>
        </div>

        {/* Title and Price Below */}
        <div className="flex flex-col">
          {/* Title */}
          <div className="text-sm font-bold text-gray-700 uppercase">
            <Link to={`/product/${id}`}>
              <h4 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
                {title}
              </h4>
            </Link>
          </div>

          {/* Price and Controls (Now Below Image) */}
          <div className="flex items-center justify-between bg-pink-200 p-2 mt-2 rounded">
            <IoIosRemove className="cursor-pointer" />
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      {/* Close (X) Button on Right */}
      <IoIosClose className="text-gray-500 w-8 h-9 hover:text-red-500 transition cursor-pointer" />
    </div>
  );
};

export default CartItem;
