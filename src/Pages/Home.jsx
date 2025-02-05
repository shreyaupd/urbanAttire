import React, { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext";

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

  console.log(filteredProduct); // ✅ Now correctly logs filtered products

  return <div>Home Page</div>;
};

export default Home;
