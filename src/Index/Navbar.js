import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { footer, faShoppingCart, faUser, FontAwesomeIcon } from '../assets/images';

export const Navbar = () => {
  const [showOption, setShowOption] = useState(false);
  const showOptionValue = () => {
    setShowOption(!showOption);
  };

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
          <div class='relative inline-block text-left'>
            <div>
              <button
                onClick={showOptionValue}
                className='inline-flex w-8 justify-center rounded-full border border-gray-300 bg-slate-400 mt-2 px-6 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100'
                id='menu-button'
                aria-expanded='true'
                aria-haspopup='true'
              >
                <FontAwesomeIcon icon={faUser} className='text-2xl  text-orange-100'></FontAwesomeIcon>
              </button>
            </div>
            {showOption && (
              <div
                className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-slate-200 hover:bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                role='menu'
                aria-orientation='vertical'
                aria-labelledby='menu-button'
                tabindex='-1'
              >
                <div className='py-1' role='none'>
                  <Link to='/login'>
                    <li
                      className='text-gray-700 hover:bg-slate-50 block px-4 py-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-0'
                    >
                      Login
                    </li>
                  </Link>
                  <Link to='/register'>
                    <li
                      className='text-gray-700 hover:bg-slate-50 block px-4 py-2 text-sm'
                      role='menuitem'
                      tabindex='-1'
                      id='menu-item-1'
                    >
                      Sign Up
                    </li>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <button className='flex mr-3 px-4  rounded-full md:mr-0 focus:ring-1 focus:ring-gray-300 dark:focus:ring-gray-600'>
            <FontAwesomeIcon icon={faShoppingCart} className='text-2xl pt-4 text-orange-100'></FontAwesomeIcon>
          </button>
        </div>
      </div>
    </div>
  );
};
