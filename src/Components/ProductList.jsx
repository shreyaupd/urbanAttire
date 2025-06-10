import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "../Components/Product";

const SearchResults = () => {
  const { products } = useContext(ProductContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  return (
    <div className="min-h-screen flex flex-col pt-24 px-4 md:px-8 lg:px-16">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">
        Results for: <span className="text-blue-600">"{query}"</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500 text-lg">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Product key={item.id} items={item} />
          ))}
        </div>
      )}

      {/* Spacer to push footer down if results are few */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default SearchResults;
