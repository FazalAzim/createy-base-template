import React from 'react';
import { logo } from '../assets/images';

export const Navbar = () => {
  return (
    <div className='w-full h-16 bg-slate-700'>
      <div className='flex flex-row justify-between'>
        <div className='flex justify-center md:w-1/12 '>
          <img src={logo} alt='logo' className='w-12 h-12 mt-2' />
        </div>
        <div className='md:w-3/12'>
          <div className='flex flex-row gap-3 md:gap-16 mt-5'>
            <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer active:underline '>Home</li>
            <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>Shop</li>
            <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>About</li>
            <li className='list-none text-white md:text-xl hover:border-b-2 cursor-pointer '>Contacts</li>
          </div>
        </div>
        <div className='flex flex-row md:w-1/12 gap-4 md:gap-8 '>
          <button
            id='dropdownNavbarLink'
            data-dropdown-toggle='dropdownNavbar'
            className='flex justify-between items-center py-2 pr-4 pl-3 w-full font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent'
          >
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='user'
              className='w-5 text-white pt-4 hover:border-b-2'
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 448 512'
            >
              <path
                fill='currentColor'
                d='M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'
              ></path>
            </svg>
          </button>
          <button>
            <svg
              aria-hidden='true'
              focusable='false'
              data-prefix='fas'
              data-icon='shopping-cart'
              className='w-7 text-white pt-4 hover:border-b-2 '
              role='img'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 576 512'
            >
              <path
                fill='currentColor'
                d='M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z'
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
