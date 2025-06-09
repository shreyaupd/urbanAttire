import React from 'react'
import { Link } from 'react-router-dom' 

const Success = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-y-4'>
        <div>
            Thank you for shopping with Us! Your order has been successfully placed.
        </div>
        <div className='flex justify-center items-center w-48 h-15 hover:bg-pink-900/90 transition-colors duration-200 bg-pink-900/70 rounded-md'>
            <Link to="/" >
            <button className='cursor-pointer flex justify-center items-center text-white'> Go to Home</button>
            </Link>
        </div>

    </div>
  )
}

export default Success