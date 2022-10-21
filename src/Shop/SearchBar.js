import React from 'react';
import { store } from '../assets/images';
import { contract } from '../assets/images';
import { expand } from '../assets/images';

export const SearchBar = () => {
  return (
    <div className='w-full h-16 bg-slate-50 flex justify-center content-center'>
      <div className='w-8/12 h-full flex flex-row justify-center content-center gap-1'>
        <div className='flex justify-center content-center'>
          <img src={store} alt='store' className='w-16 rounded-full' />
        </div>
        <div className='w-9/12 flex justify-center content-center'>
          <div className='mt-2'>
            <select
              id='categories'
              className='bg-gray-200 border border-gray-300 rounded-l-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-[11px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option value ='PK' >Select categories</option>
              <option value='US'>Lorem, ipsum.</option>
              <option value='CA'>Lorem, ipsum.</option>
              <option value='FR'>Lorem, ipsum.</option>
              <option value='DE'>Lorem, ipsum.</option>
            </select>
          </div>
          <div className='relative w-6/12 mt-2'>
            <input
              type='search'
              id='search-dropdown'
              className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-200 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
              placeholder='Search...'
              required
            />
            <button
              type='submit'
              className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-slate-500 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
            >
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <div className='flex flex-row gap-1'>
          <button>
            <img src={contract} alt='close' className='w-12 h-12' />
          </button>
          <button>
            <img src={expand} alt='open' className='w-12 h-12' />
          </button>
        </div>
      </div>
    </div>
  );
};
