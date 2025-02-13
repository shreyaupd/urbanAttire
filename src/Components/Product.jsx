import React, { useContext } from "react";
import { IconButton, ButtonToolbar } from 'rsuite';
import { FaEye } from "react-icons/fa";
import PlusIcon from '@rsuite/icons/Plus';
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
    <div className="mt-10 md:mt-20">
      <div className="overflow-hidden flex justify-center items-center border border-[#e4e4e4] h-[280px] mb-5 p-[35px] group relative transform">
        <div className="w-[200px] mx-auto flex justify-center items-center">
          <img
            className="cursor-pointer group-hover:scale-110 transition duration-300"
            src={image}
            alt={title}
          />
        </div>

        <div className="absolute top-0 bg-transparent w-12 h-[84px] mt-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 right-0 md:group-hover:right-4">
          <div className="absolute cursor-pointer top-0 right-0 left-1.5 mt-1 rounded-full bg-gray-400 w-10 h-10 flex justify-center items-center transition-transform duration-300 hover:bg-gray-600/79">
            <ButtonToolbar
              onClick={handleAddToCart}
              onMouseLeave={MouseLeave}
              className="flex justify-center items-center w-full h-full bg-transparent border-none focus:outline-none"
            >
              <IconButton icon={<PlusIcon className="mb-0.5 cursor-pointer" />} />
            </ButtonToolbar>
          </div>

          <div className="absolute top-10 right-0 left-1.5 mt-2 rounded-full w-10 h-10 flex justify-center items-center transition">
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