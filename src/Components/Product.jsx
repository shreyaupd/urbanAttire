import React, { useContext } from "react";
import { FaEye, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Contexts/CartContext";

const Product = ({ items }) => {
  const { addtocart } = useContext(CartContext);
  const { id, image, category, title, price } = items;
  const [clicked, setClicked] = React.useState(false);

  const handleAddToCart = () => {
    addtocart(items, id);
    setClicked((prev) => !prev);
  };

  const MouseLeave = () => {
    setClicked(false);
  };

  return (
    <div>
      <div className="overflow-hidden flex justify-center items-center border border-[#e4e4e4] h-[280px] mb-5 p-[35px] group relative transform">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img
            className="cursor-pointer group-hover:scale-110 transition duration-300"
            src={image}
            alt={title}
          />
        </div>

        <div className="absolute top-0 right-0 mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300">
          <div className="flex flex-col items-center space-y-2">
            <button
              onClick={handleAddToCart}
              onMouseLeave={MouseLeave}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-400 hover:bg-gray-600 transition duration-200"
            >
              <FaPlus className="text-white" />
            </button>
            <Link
              to={`/product/${id}`}
              className="w-10 h-10 flex justify-center items-center rounded-full bg-red-400 hover:bg-red-600 transition duration-200"
            >
              <FaEye className="text-white" />
            </Link>
          </div>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-bold">{title}</h2>
        </Link>
        <div className="font-bold">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Product;