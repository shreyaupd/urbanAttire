import React from 'react'
const CartItem = ({items}) => {
  const {image,title,price,amount,id}=items
  return (
    <div>
      <div> 
        <img src={image} alt={title} />
      </div>
      <div>
        <h4>{title}</h4>
        <h5>{price}</h5>
        <button>remove</button>
      </div>
     </div>
  )
}

export default CartItem