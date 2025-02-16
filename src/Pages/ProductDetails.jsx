import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../Contexts/ProductContext";
import {CartContext} from "../Contexts/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const { addtocart } = useContext(CartContext);
  const [product, setProduct] = useState();

  useEffect(() => {
    const productFound = products.find((item) => item.id === parseInt(id));
    setProduct(productFound);
  }, [products, id]);

  const handleAddToCart = () => {
    if(product){
      addtocart(product,product.id)
    }
  }
  if(!product){
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }
  return (
    <div className="container h-[600px] mt-30 mx-auto my-12 p-5 md:p-10">
      <div className="flex justify-center flex-col md:flex-row items-center gap-12">
        {/* Product Image */}
        <div className="w-[400px] h-[400px] flex justify-center items-center p-5 bg-white rounded-lg shadow-xl transition-all duration-300 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white w-full md:w-[50%] p-8 rounded-lg shadow-lg space-y-6">
          <h1 className="text-4xl font-semibold text-gray-800">{product.title}</h1>
          <h2 className="text-3xl font-bold text-red-600">${product.price.toFixed(2)}</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>{product.description}</p>
          </div>
          <button onClick={handleAddToCart} className="w-full py-3 cursor-pointer bg-pink-900/70 text-white text-lg font-semibold rounded-lg hover:bg-pink-900/90 transition-colors duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
