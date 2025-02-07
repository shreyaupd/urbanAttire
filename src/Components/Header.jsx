import { useContext } from 'react';
import { SidebarContext } from '../Contexts/SidebarContext';
import { FaShoppingBag } from "react-icons/fa";
const Header = () => {
  const {setIsOpen } = useContext(SidebarContext);

  function open_close() {
    // This toggles the sidebar open/close state
    setIsOpen((prev) => !prev);
  }

  return (
    <header className=' bg-pink-200 flex justify-between items-center p-[20px]'>
    <div className='md:ml-[10px] xl:ml-[12px]'>
      <div>Header</div>
      <div onClick={open_close} className='cursor-pointer flex relative '><FaShoppingBag className='w-[24px] h-[30px] '/></div>
    </div>
    </header>
  );
};

export default Header;
