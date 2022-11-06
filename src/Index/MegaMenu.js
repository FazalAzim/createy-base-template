import React from 'react';
import Typical from 'react-typical';
import { faAngleDown , FontAwesomeIcon } from '../assets/images';


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
        <FontAwesomeIcon
                  icon={faAngleDown}
                  className='text-3xl  text-slate-100 hover:cursor-pointer '
                ></FontAwesomeIcon>
        </div>
      </div>
      <div className='w-full h-24'></div>
    </div>
  );
};
