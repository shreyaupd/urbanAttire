import React, { useState, createContext } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addtocart = (items, id) => {
    const newItem = { ...items, amount: 1 };
    const cartItem = cart.find((citem) => citem.id === id); // Find existing item in cart

    if (cartItem) {
      // If item exists, update its amount
      const newCart = cart.map((citem) =>
        citem.id === id ? { ...citem, amount: citem.amount + 1 } : citem
      );
      setCart(newCart); // Update cart with new cart
    } else {
      // If new item, add it to cart
      setCart([...cart, newItem]);
    }
  };
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart); // Update the cart after removal
  };
 //clear cart
  const clearCart = () => {
    setCart([]);
  }; 

  return (
    <CartContext.Provider value={{ cart, addtocart,removeFromCart,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;