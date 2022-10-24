import React from 'react';
import { sneaker } from '../assets/images';


export const SectionPhoto = () => {
  return (
    <div className='w-full h-96 mt-3 flex justify-center items-center'>
      <div className='w-9/12 h-full bg-slate-50 rounded-xl flex justify-center items-center'>
        <img src={sneaker} alt="SectionPhoto" className='w-[500px]'/>
      </div>
    </div>
  );
};
