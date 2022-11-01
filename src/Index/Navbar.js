import React from 'react';
import { Link } from 'react-router-dom';
import { footer ,faShoppingCart, faUser ,FontAwesomeIcon} from '../assets/images';

export const Navbar = () => {
  return (
    <div className='w-full h-16 bg-slate-500'>
      <div className='flex flex-row justify-between'>
        <div className='flex justify-center md:w-1/12 '>
          <img src={footer} alt='logo' className='w-12 h-12 rounded-full mt-2' />
        </div>
        <div className='md:w-3/12'>
          <div className='flex flex-row gap-3 md:gap-16 mt-5'>
            <Link to='/'>
              <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer active:underline '>
                Home
              </li>
            </Link>
            <Link to='/shop'>
              <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>Shop</li>
            </Link>
            <Link to='/about'>
              <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>About</li>
            </Link>
            <Link to='/contact'>
              <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>Contacts</li>
            </Link>
          </div>
        </div>
        <div className='flex flex-row md:w-1/12 gap-4 md:gap-4 '>
          <button className='flex text-sm px-4 rounded-full focus:ring-1 md:mr-0  focus:ring-gray-300 dark:focus:ring-gray-600'>
            <FontAwesomeIcon icon={faUser} className='text-2xl pt-4 text-orange-100'></FontAwesomeIcon>
          </button>

          <button className='flex mr-3 px-4  rounded-full md:mr-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-2xl pt-4 text-orange-100'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
