import React from 'react';
import { store } from '../assets/images';
import { contract } from '../assets/images';
import { expand } from '../assets/images';
import { useState, useEffect } from 'react';
import { SectionPhoto } from './SectionPhoto';
import { GridCard } from './GridCard';
import { ListCard } from './ListCard';
import axios from 'axios';

export const SearchBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState('');
  useEffect(() => {
    axios
      .get('https://customer_3.createy.io/api/v1/products/', {
        headers: {
          'access-token': '2WVgN95sY_hmXPuoYdUYIw',
          client: 'QBsvarwb4ci-7UIwvcsL1Q ',
          expiry: '1667480071 ',
          'token-type': 'Bearer',
          uid: 'usama@gmail.com',
        },
      })
      .then((response) => {
        console.log(response.data.products);
        setData(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown(true);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };
  return (
    <>
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
                <option value='PK'>Select categories</option>
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
            <button onClick={handleClick}>
              <img src={contract} alt='close' className='w-12 h-12' />
            </button>
            <button onClick={handleClick}>
              <img src={expand} alt='open' className='w-12 h-12' />
            </button>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-full flex flex-col justify-center gap-3'>
          <div className='w-full'>
            <SectionPhoto />
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-11/12 flex flex-wrap justify-center gap-4'>
              {' '}
              {isShown ? <ListCard data={data} /> : <GridCard data={data} />}
            </div>
          </div>
          {/* <div className='w-full flex flex-col justify-center gap-5'></div> */}
        </div>
        <div className='w-full flex justify-center items-center '>
          <div className='w-1/12 mt-5 flex flex-row justify-center gap-1'>
            <button className='bg-slate-300 p-4 rounded-lg'>&larr;</button>
            <p className='bg-slate-300 p-4 rounded-lg'>1</p>
            <button className='bg-slate-300 p-4 rounded-lg'>&rarr;</button>
          </div>
        </div>
      </div>
    </>
  );
};
