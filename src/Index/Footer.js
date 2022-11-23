import React from 'react';
import { footer, faFacebook, faTwitter, faInstagram, FontAwesomeIcon } from '../assets/images';

export const Footer = () => {
  return (
    <div className='w-full h-24 '>
      <div className='flex flex-row justify-between items-center border-b-2'>
        <div className='w-1/12 mx-auto flex flex-row mb-2 '>
          <div>
            <img src={footer} alt='logo' className='w-12 h-12 mt-2' />
          </div>
          <div>
            <h1 className='mt-6 ml-2'>Title</h1>
          </div>
        </div>
        <div className='w-7/12'>
          <div className='flex flex-row gap-3 md:gap-8 mt-5'>
            <li className='list-none text-slate-500 md:text-xl hover:underline cursor-pointer active:underline '>
              Home
            </li>
            <li className='list-none text-slate-500 md:text-xl hover:underline cursor-pointer '>Shop</li>
            <li className='list-none text-slate-500 md:text-xl hover:underline cursor-pointer '>About</li>
            <li className='list-none text-slate-500 md:text-xl hover:underline cursor-pointer '>Contacts</li>
          </div>
        </div>
        <div className='w-2/12 flex flex-row justify-start gap-4'>
          <a className='social-icons' href='#!'>
            <FontAwesomeIcon icon={faFacebook} className='text-3xl text-blue-500'></FontAwesomeIcon>
          </a>
          <a className='social-icons' href='#!'>
            <FontAwesomeIcon icon={faTwitter} className='text-3xl text-blue-500'></FontAwesomeIcon>
          </a>
          <a className='social-icons' href='#!'>
            <FontAwesomeIcon icon={faInstagram} className='text-3xl text-blue-500'></FontAwesomeIcon>
          </a>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-slate-500'>All rights reserved 2022</p>
      </div>
    </div>
  );
};
