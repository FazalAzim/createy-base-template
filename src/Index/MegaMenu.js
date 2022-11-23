import React from 'react';
import Typical from 'react-typical';
import { faAngleDown, FontAwesomeIcon } from '../assets/images';

export const MegaMenu = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${props.sectionPicture})`,
          backgroundSize: '35%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className='w-full h-[600px] bg-sky-400 '
      >
        <div className='w-full h-[560px] flex flex-col justify-center items-center'>
          <h1 className='font-extrabold text-transparent text-7xl bg-clip-text bg-gradient-to-r from-slate-600 to-slate-200 flex justify-center items-center '>
            <Typical loop={Infinity} steps={[`${props.title1}`, 2000, `${props.title2}`, 2000]} />
          </h1>
          <h1 className='underline underline-offset-8 decoration-slice decoration-sky-800 font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-slate-900 to-slate-100 flex justify-center items-center'>
            {[props.title3]}
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
