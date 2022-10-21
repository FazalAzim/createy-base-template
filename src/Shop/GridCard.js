import React from 'react';
import { sneaker } from '../assets/images';

export const GridCard = () => {
  return (
    <div className='w-2/12 h-[500px] mt-6 ml-4  rounded-lg bg-blue-100 shadow-2xl'>
      <div className='w-full h-2/5  rounded-t-lg shadow-lg '>
        <img src={sneaker} alt='sneaker' className='w-64' />
      </div>
      <div className='w-full h-3/5 flex flex-col rounded-b-lg bg-gray-50 gap-10'>
        <div className='mt-5 flex flex-row justify-center gap-12'>
          <div className='text-2xl text-stone-600 font-bold'>Sneaker</div>
          <div className='text-2xl text-stone-600 font-bold '>60.00$</div>
        </div>
        <div className='pl-4 text-xl text-stone-600 font-medium'>Running Shoes Tennis Shoes</div>
        <div className='flex flex-col justify-center content-center gap-4'>
          <div className='w-10/12 h-12 mx-auto bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
            <button className='text-xl text-white hover:text-xs'>Cart</button>
          </div>
          <div className='w-10/12 h-12 mx-auto bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
            <button className='text-xl text-white hover:text-xs'>View</button>
          </div>
        </div>
      </div>
    </div>
  );
};
