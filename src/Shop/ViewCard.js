import React from 'react';
import { sneaker } from '../assets/images';

export const ViewCard = ({ data, visible, onClose }) => {
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  return (
    <div className='w-full h-screen flex justify-center items-center  bg-slate-100 bg-opacity-0 backdrop-blur-sm rounded-lg fixed inset-0 '>
      <div className='w-9/12 h-3/6 flex bg-slate-200 rounded-lg relative'>
        <div className='absolute right-5 top-3 cursor-pointer text-4xl hover:text-6xl' onClick={handleOnClose}>
          &times;
        </div>
        <div className='w-4/12 h-full bg-slate-300 rounded-lg'>
          <img src={sneaker} alt='stock' />
        </div>
        <div className='w-8/12 h-full bg-slate-200 flex flex-col rounded-lg '>
          <div className='w-full h-3/6'>
            <h1 className='text-3xl font-medium text-pink-800 p-3 flex justify-center items-center'>{data.name}</h1>
            <h1 className='text-2xl font-normal text-pink-700 pl-8'>{data.description}</h1>
          </div>
          <div className='w-full h-3/6 flex flex-col'>
            <div className='w-full h-3/6 border-b-2 border-slate-400 flex justify-start items-center'>
              <div className='ml-8 w-24 h-8 bg-slate-300 p-3 flex justify-center items-center border-2 border-slate-400 rounded-lg'>
                1
              </div>
              <div className='ml-8 text-lg text-pink-700'>In Stock:{data.inventory}</div>
            </div>
            <div className='w-full h-3/6 flex justify-start items-center'>
              <div className='ml-16 text-2xl text-pink-700'>{data.price}$</div>
              <div className='w-52 h-12 mx-auto bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='text-xl text-white hover:text-xs'>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
