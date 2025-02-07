import React, { useState, useEffect, createContext } from "react";
export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtocart = (items, id) => {
    const newItem = { ...items, amount: 1 };
    const cartItem = cart.find((citem) => {
      return citem.id === id;
    });
    if (cartItem) {
      // If item exists, update its amount
      const newCart = cart.map((citem) =>
        citem.id === id ? { ...citem, amount: citem.amount + 1 } : citem
      );
      setCart(newCart);
    } else {
      // If new item, add it to cart
      setCart([...cart, newItem]);
    }
    console.log(cart);
  };
  return (
    <CardContext.Provider value={{ addtocart }}>
      {children}
    </CardContext.Provider>
  );
};

export default CardProvider;
