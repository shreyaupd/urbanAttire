// Pages/SearchResults.jsx
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../Contexts/ProductContext";
import Product from "../Components/Product";

const SearchResults = () => {
  const { products } = useContext(ProductContext);
  const location = useLocation();

  // Get the query string
  const query = new URLSearchParams(location.search).get("query")?.toLowerCase() || "";

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query) ||
    product.category.toLowerCase().includes(query)
  );

  return (
    <div className="p-10 m-20">
      <h1 className="text-xl font-semibold mb-4">
        Results for: <span className="text-blue-600">"{query}"</span>
      </h1>

      {filteredProducts.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <Product key={item.id} items={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;
