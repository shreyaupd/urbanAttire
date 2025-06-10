import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../Components/Product"
import { ProductContext } from "../Contexts/ProductContext";
import Hero from "../Components/Hero"
const Home = () => {
  // Get products from product context
  const { products } = useContext(ProductContext);

  // Get only male and female clothing category
  const filteredProduct = products.filter((product) => {
    return (
      product.category === "men's clothing" ||
      product.category === "women's clothing"
    );
  });

   const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
    }
  };
  return (
    <div>
      <Hero />
      <div className="w-full max-w-2xl mx-auto mt-8 -mb-4">
          <input 
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full border bg-gray-300/50 rounded-lg p-4 border-gray-300 focus:outline-none  "
          />
      </div>
     
      <section className="p-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-9 gap-y-0.25">
            {filteredProduct.map((item) => {
              return (
                <Product items={item} key={item.id}/>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
