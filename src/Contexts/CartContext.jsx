import React, { useState, useEffect, createContext } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtocart = (items, id) => {
    const newItem = { ...items, amount: 1 };
    const cartItem = cart.find((citem) => {
      return citem.id === id; //immidiate objct satisfying the condition
    });
    if (cartItem) {
      // If item exists, update its amount
      const newCart = cart.map((citem) =>
        citem.id === id ? { ...citem, amount: citem.amount + 1 } : citem
      );
      setCart(newCart);//update cart with newcart 
    } else {
      // If new item, add it to cart
      setCart([...cart,newItem]);
    }
  };
  return (
    <CartContext.Provider value={{ cart,addtocart,setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
