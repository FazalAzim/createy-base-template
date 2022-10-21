import React from 'react';
import { sneaker } from '../assets/images';

export const ListCard = () => {
  return (
    <div className='w-full h-72 mt-8 flex justify-center content-center'>
      <div className='w-8/12 h-full rounded-lg shadow-lg bg-slate-100 flex flex-row'>
        <div className='w-3/12 h-full rounded-lg bg-slate-200'>
          <img src={sneaker} alt='sneaker' className='w-68' />
        </div>
        <div className='w-9/12 h-full flex flex-row '>
          <div className='w-9/12 h-full flex flex-col'>
            <div className='w-full h-3/4 flex justify-center content-center '>
              <div className='h-full w-9/12 mt-12'>
                <div className='text-2xl text-stone-600 border-b-2 font-bold'>Sneaker</div>
                <div className='text-xl text-stone-600 font-medium pt-3'>Running Shoes Tennis Shoes</div>
              </div>
            </div>
            <div className='flex flex-row justify-center gap-4'>
              <div className='w-72 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='text-xl text-white hover:text-xs'>Cart</button>
              </div>
              <div className='w-72 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='text-xl text-white hover:text-xs'>View</button>
              </div>
            </div>
          </div>
          <div className='w-3/12 h-full flex flex-col justify-center bg-slate-50 rounded-lg gap-5 '>
            <div className='text-xl text-stone-600 font-normal '><span className='text-stone-400 pr-3 line-through'>$75</span> <span>$60</span></div>
            <div className='text-xl text-stone-600 font-normal '>Swift Run Shoes</div>
            <div className='text-xl text-stone-400 font-normal '>Mens's Original</div>
            <div className='text-xl text-stone-600 font-normal '><span className='text-stone-400 pr-3'>2 colors .</span> <span>best seller</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};
