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
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, []);

  function open_close() {
    // This toggles the sidebar open/close state
    setIsOpen((prev) => !prev);
  }

  return (
    <header className={`${isActive ? 'bg-white flex justify-between items-center px-[30px] pt-1' : 'bg-none flex justify-between items-center px-[30px] pt-1'} fixed w-full transition-all z-40`}>
      <Link to='/'><img src={logo} alt='logo' className='w-[100px] h-[100px]' /></Link>
      <div className='md:ml-[10px] xl:ml-[12px]'>
        <div>Header</div>
      </div>
      <div className='flex items-center'>
        <div onClick={open_close} className='cursor-pointer flex relative'>
          <FaShoppingBag className='w-[24px] h-[30px]' />
          <div className='bg-amber-200 absolute rounded-full h-[20px] w-[20px] top-[-10px] right-[-10px] flex justify-center items-center'>{itemAmount}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;