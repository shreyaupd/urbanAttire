import React from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Product = ({ items }) => {
  console.log(items);
  const { id, image, category, title, price } = items; // items is the prop
  return (
    <div>
      {/* Increased container height and padding */}
      <div className="overflow-hidden flex justify-center items-center border border-[#e4e4e4] h-[280px] mb-5 p-[35px] group relative transform">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img
            className="cursor-pointer group-hover:scale-110 transition duration-300"
            src={image}
            alt={title}
          />
        </div>

        {/* Moved button container to the top-right with proper offset */}
        <div className="absolute top-0 bg-amber-400/40 w-12 h-[84px] mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 -right-20 group-hover:right-5">
          {/* Plus Button */}
          <div className="absolute top-0 right-0 left-1.5 mt-1 rounded-full bg-amber-800/40 w-9 h-9 flex justify-center items-center">
            <button className="cursor-pointer w-7 h-7 flex justify-center items-center rounded-full bg-white shadow-md hover:bg-gray-200 transition">
              <FaPlus className="text-gray-700 text-lg" />
            </button>
          </div>

          {/* Eye Button */}
          <div className="absolute top-10 right-0 left-1.5 mt-1 rounded-full w-9 h-9 flex justify-center items-center transition">
            <Link
              to={`/product/${id}`}
              className="w-full h-full flex justify-center items-center rounded-full bg-red-400/50 hover:bg-red-400 transition duration-200"
            >
              <FaEye className="text-white" />
            </Link>
          </div>
        </div>
      </div>


      <div>
        <div className="text-sm capitalize text-gray-500 mb-1y">{category}</div>
        <Link to={`/product/${id}`}>
        <h2 className="font-bold">{title}</h2>
        </Link>
        <div className="font-bold">{price}</div>
       </div>
    </div>
  );
};

export default Product;
