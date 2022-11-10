import React from 'react';
import { Link } from 'react-router-dom';
import { sneaker } from '../assets/images';

export const ShoppingBag = () => {
  return (
    <>
      <div>
        <div className='w-full text-2xl flex justify-center items-center p-8'>Your shopping cart is empty.</div>
        <div className='w-full flex justify-center items-center'>
          <Link to='/shop'>
            <button className='text-2xl font-medium text-blue-500 hover:underline'>Let's Shop</button>
          </Link>
        </div>
      </div>
      <div className='w-full'>
        <div className='w-full flex bg-slate-100 justify-center items-center'>
          <h1 className='text-5xl mt-4 font-normal text-emerald-500'>Shopping Cart</h1>
        </div>
        <div className='w-full flex flex-col mt-4  justify-center items-center'>
          <div className='w-full flex justify-center gap-80'>
            <div className='text-2xl font-normal'>Cart:</div>
            <div className='text-2xl font-normal'>Total Items:</div>
          </div>
          <div className='w-10/12 mt-4 h-16 border-2 border-slate-500 rounded-lg'>
            <table className='w-full h-full'>
              <tbody>
                <tr className='flex justify-center gap-60 '>
                  <td className='flex justify-center items-center'>
                    <img src={sneaker} alt='logo' className='w-14' />
                  </td>
                  <td className='text-xl font-normal flex justify-center items-center'>Sneaker</td>
                  <td className='text-xl font-normal flex justify-center items-center'>Price:$5</td>
                  <td className='text-xl font-normal flex justify-center items-center'>Quantity:8</td>
                  <td className='text-4xl font-normal flex justify-center items-center'>&times;</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
