import React from 'react';
import Typical from 'react-typical';

export const MegaMenu = (props) => {
  return (
    <div>
      <div style={{ backgroundImage: `url(${props.sectionPicture})`,'backgroundSize':'cover','backgroundRepeat':'no-repeat' }} className='w-full h-[600px] bg-slate-700'>
        <div className='w-full h-[560px] flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-extrabold text-blue-300 drop-shadow-md flex justify-center items-center'>
            <Typical loop={Infinity} steps={[`${props.title1}`, 1000, `${props.title2}`, 1000]} />
          </h1>
          <h1 className='pt-6 text-white flex justify-center items-center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, eos. Ipsa ex cum ut, fuga incidunt
            cupiditate soluta minima blanditiis.
          </h1>
        </div>
        <div className='flex justify-center items-center'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='angle-double-down'
            className='w-4 text-white'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
          >
            <path
              fill='currentColor'
              d='M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z'
            ></path>
          </svg>
        </div>
      </div>
      <div className='w-full h-24'></div>
    </div>
  );
};
