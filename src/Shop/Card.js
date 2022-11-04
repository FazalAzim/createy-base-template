import React from 'react';
import { sneaker } from '../assets/images';

export const Card = ({ name, price, image, description, isShown }) => {
  return (
    <>
      {isShown ? (
        <div className='w-full h-72 mt-8 flex justify-center content-center'>
          <div className='w-8/12 h-full rounded-lg shadow-lg bg-slate-100 flex flex-row'>
            <div className='w-3/12 h-full rounded-lg bg-slate-200 flex justify-center item-center'>
              <img src={image ? image : sneaker} alt='sneaker' className='w-full h-full rounded-lg' />
            </div>
            <div className='w-9/12 h-full flex flex-row '>
              <div className='w-9/12 h-full flex flex-col'>
                <div className='w-full h-3/4 flex justify-center content-center '>
                  <div className='h-full w-9/12 mt-12'>
                    <div className='text-2xl text-stone-600 border-b-2 font-bold'>{name}</div>
                    <div className='text-xl text-stone-600 font-medium pt-3'>{description}</div>
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
                <div className='text-xl text-stone-600 font-normal '>
                  <span className='text-stone-400 pr-3 line-through'>$75</span> <span>${price}</span>
                </div>
                <div className='text-xl text-stone-600 font-normal '>Swift Run Shoes</div>
                <div className='text-xl text-stone-400 font-normal '>Mens's Original</div>
                <div className='text-xl text-stone-600 font-normal '>
                  <span className='text-stone-400 pr-3'>2 colors .</span> <span>best seller</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='w-2/12 h-[500px] mt-6 ml-4  rounded-lg bg-blue-100 shadow-2xl'>
          <div className='w-full h-2/5  rounded-t-lg shadow-lg flex justify-center items-center'>
            <img
              src={image ? image : sneaker}
              alt='sneaker'
              className='w-full h-full flex justify-center items-center rounded-t-lg'
            />
          </div>
          <div className='w-full h-3/5 flex flex-col rounded-b-lg bg-gray-50 gap-10'>
            <div className='mt-5 flex flex-row justify-center gap-12'>
              <div className='text-2xl text-stone-600 font-bold'>{name}</div>
              <div className='text-2xl text-stone-600 font-bold '>{price}$</div>
            </div>
            <div className='pl-4 text-xl text-stone-600 font-medium'>{description}</div>
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
      )}
    </>
  );
};
