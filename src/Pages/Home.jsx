import React, { useContext } from "react";
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
  return (
    <div>
      <Hero />
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
