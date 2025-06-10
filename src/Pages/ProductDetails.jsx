import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../Contexts/ProductContext";
import { CartContext } from "../Contexts/CartContext";

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
    if (product) {
      addtocart(product, product.id);
    }
  };

  if (!product) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Product Image */}
        <div className="w-full max-w-md mx-auto lg:mx-0">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-1 w-full">
          <div className="bg-white p-6 md:p-8 rounded-xl shadow-md space-y-6">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800">
              {product.title}
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-red-600">
              ${product.price.toFixed(2)}
            </h2>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className="w-full py-3 bg-pink-900/70 text-white text-lg font-semibold rounded-lg hover:bg-pink-900/90 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
