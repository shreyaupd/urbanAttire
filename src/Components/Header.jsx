import { useContext, useState, useEffect } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from '../Contexts/CartContext';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  const { setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Cleanup
  }, []);

  function open_close() {
    setIsOpen(prev => !prev);
  }

  return (
    <header
      className={`${isActive
        ? 'bg-amber-100'
        : 'bg-none'
        } flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-[30px] py-2 fixed w-full transition-all z-40`}
    >
      {/* Logo */}
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          className='w-[70px] sm:w-[80px] md:w-[90px] lg:w-[100px] h-auto'
        />
      </Link>

      {/* Cart Icon */}
      <div className='flex items-center'>
        <div onClick={open_close} className='cursor-pointer flex relative'>
          <FaShoppingBag className='w-5 h-6 sm:w-6 sm:h-7 md:w-[24px] md:h-[30px]' />
          <div className='bg-amber-200 text-xs absolute rounded-full h-5 w-5 sm:h-[20px] sm:w-[20px] top-[-10px] right-[-10px] flex justify-center items-center font-semibold'>
            {parseFloat(itemAmount).toFixed(0)}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
