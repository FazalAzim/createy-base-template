import React from 'react';
import { sneaker } from '../assets/images';

export const SectionPhoto = ({ data }) => {
  return (
    <div className='w-full h-96 mt-3 flex justify-center items-center relative'>
      <div className='w-10/12 h-96 bg-slate-50 rounded-xl flex justify-center items-center'>
        <img src={data.image ? data.image : sneaker} alt='' className='object-cover h-full w-8/12 rounded-2xl' />
        <div className='absolute text-3xl  text-stone-500 bottom-0 bg-slate-100 flex justify-center items-center rounded-2xl'>
          {data.description}
        </div>
      </div>
    </div>
  );
};
