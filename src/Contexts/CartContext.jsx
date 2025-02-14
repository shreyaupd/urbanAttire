import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
     const total=cart.reduce((accumulator,prevAmount)=>{
      return accumulator+prevAmount.price*prevAmount.amount;
     },0)
     setTotal(total)

  });
 useEffect(() => {
  if(cart){
  const amount=cart.reduce((accumulator,prevItem)=>{
    return accumulator+prevItem.amount
  },0);
  setItemAmount(amount.toFixed(1))
 }
},[cart])

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

  const increaseAmount = (id) => {
    const newCart=cart.map((citem)=>
      citem.id===id? {...citem,amount:citem.amount+1}:citem
    )
    setCart(newCart)

  }

  const decreaseAmount = (id) => {
    const updatedCart = cart.map((citem) =>
      citem.id === id ? { ...citem, amount: citem.amount - 1 } : citem
    );
  
    // Check if any item has amount 0 and remove it
    const newCart = updatedCart.filter((citem) => {
      if (citem.id === id && citem.amount === 0) {
        removeFromCart(id);
        return false; // Exclude the item from newCart
      }
      return true; // Keep other items
    });
  
    setCart(newCart);
  };
  

 

 //clear cart
  const clearCart = () => {
    setCart([]);
  }; 

  return (
    <CartContext.Provider value={{ cart, increaseAmount, decreaseAmount,addtocart,removeFromCart,itemAmount,total,clearCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;