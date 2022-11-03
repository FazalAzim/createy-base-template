import React from 'react';
import { store, faList, faSearch, faGrip, FontAwesomeIcon } from '../assets/images';
import { useState, useEffect } from 'react';
import { SectionPhoto } from './SectionPhoto';
import { GridCard } from './GridCard';
import { ListCard } from './ListCard';
import { getProducts, getSearch, showCategories, getFilter } from '../api/products';

export const SearchBar = () => {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const { data } = await getProducts();
    setData(data.products);
    console.log(data.products);
  }

  const searchHandle = async (event) => {
    let key = event.target.value;
    if (key) {
      const { data } = await getSearch(key);
      setData(data.products);
    } else {
      fetchData();
    }
  };
  useEffect(() => {
    showFilter();
  }, []);

  async function showFilter() {
    const { data } = await showCategories();
    // console.log(data);
    setCategories(data);
  }

  const filterHandle = async (event) => {
    let key = event.target.value;
    console.log(key);
    if (key) {
      const { data } = await getFilter(key);
      setData(data.products);
      console.log(data.products);
    }
  };

  const handleClick = (value) => {
    setIsShown(value);
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
                onChange={filterHandle}
                className='bg-gray-200 border border-gray-300 rounded-l-lg text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-[11px] dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              >
                <option value='All'>All Categories</option>
                {categories.map((categories) => (
                  <option value={categories.id}>{categories.name}</option>
                ))}
              </select>
            </div>
            <div className='relative w-6/12 mt-2'>
              <input
                type='text'
                placeholder='Search...'
                className='block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-200 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'
                onChange={searchHandle}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-slate-500 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className='text-[17px]  text-slate-100 hover:cursor-pointer '
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
          <div className='flex flex-row justify-center items-center gap-1'>
            <FontAwesomeIcon
              onClick={() => handleClick(false)}
              icon={faGrip}
              className='text-5xl text-slate-400 hover:cursor-pointer bg-slate-200 hover:bg-slate-300 border-2 border-orange-600 rounded-l-lg'
            ></FontAwesomeIcon>

            <FontAwesomeIcon
              onClick={() => handleClick(true)}
              icon={faList}
              className='text-5xl w-10  text-slate-400 hover:cursor-pointer bg-slate-200 hover:bg-slate-300 border-2 border-orange-600 rounded-r-lg'
            ></FontAwesomeIcon>
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-full flex flex-col justify-center gap-3'>
          <div className='w-full'>
            <SectionPhoto data={categories} />
          </div>{' '}
          <div className='w-full flex justify-center items-center'>
            <div className='w-11/12 flex flex-wrap justify-center gap-4'>
              {isShown ? <ListCard data={data} /> : <GridCard data={data} />}
            </div>
          </div>
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
