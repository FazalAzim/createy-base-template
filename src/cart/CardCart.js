import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon, faCheck } from '../assets/images';
import { fetchCart } from '../api/products';
import { useState, useEffect } from 'react';

export const CardCart = () => {
  const [totalAmount, setTotalAmount] = useState('');
  const [totalCost, setTotalCost] = useState('');
  useEffect(() => {
    getCart();
  }, []);
  function getCart() {
    fetchCart().then((res) => {
      setTotalAmount(res.data.total_amount);
      setTotalCost(res.data.total_items_amount);
    });
  }
  return (
    <section className='w-full flex flex-col justify-center items-center mt-4'>
      <div className='w-8/12 h-20 flex flex-col bg-slate-50 rounded-lg'>
        <div className='w-full flex justify-center items-center bg-slate-50'>
          <FontAwesomeIcon
            icon={faCheck}
            className='text-3xl text-slate-50 bg-slate-500 rounded-full'
          ></FontAwesomeIcon>
          <span>
            <div className='px-3'>
              <hr className='w-80  border-[1px] border-slate-900'></hr>
            </div>
          </span>
          <FontAwesomeIcon
            icon={faCheck}
            className='text-3xl text-slate-50 bg-slate-500 rounded-full'
          ></FontAwesomeIcon>
          <span>
            <div className='px-3'>
              <hr className='w-80 border-[1px] border-slate-900'></hr>
            </div>
          </span>
          <span className='flex h-7 w-7'>
            <span className='animate-ping absolute inline-flex h-7 w-7 rounded-full bg-yellow-400 opacity-100'></span>
            <span className='relative inline-flex rounded-full h-7 w-7 bg-yellow-500'></span>
          </span>
        </div>
        <div className='w-full flex justify-center gap-80'>
          <h1>Your Order</h1>
          <h1>Shipping</h1>
          <h1>Payment</h1>
        </div>
      </div>
      <div className='w-8/12 flex flex-col'>
        <div className='w-full mt-2 flex flex-col justify-center items-center'>
          <Link to='/address'>
            <div className='w-32 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
              <button className='w-full text-xl text-white hover:text-xs'>Address+</button>
            </div>
          </Link>
          <h1 className='text-xl text-cyan-700'>Cards Address</h1>
        </div>
        <div className='w-full flex  mt-4'>
          <div className='w-2/6 flex flex-row justify-center items-center'>
            <fieldset className='mb-5'>
              <legend className='sr-only'>Countries</legend>

              <div className='flex items-center mb-4'>
                <input
                  id='country-option-1'
                  type='radio'
                  name='countries'
                  value='USA'
                  className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                  aria-labelledby='country-option-1'
                  aria-describedby='country-option-1'
                  checked=''
                />
                <label for='country-option-1' className='text-sm font-medium text-gray-900 ml-2 block'>
                  United States
                </label>
              </div>

              <div className='flex items-center mb-4'>
                <input
                  id='country-option-2'
                  type='radio'
                  name='countries'
                  value='Germany'
                  className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                  aria-labelledby='country-option-2'
                  aria-describedby='country-option-2'
                />
                <label for='country-option-2' className='text-sm font-medium text-gray-900 ml-2 block'>
                  Germany
                </label>
              </div>

              <div className='flex items-center mb-4'>
                <input
                  id='country-option-3'
                  type='radio'
                  name='countries'
                  value='Spain'
                  className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                  aria-labelledby='country-option-3'
                  aria-describedby='country-option-3'
                />
                <label for='country-option-3' className='text-sm font-medium text-gray-900 ml-2 block'>
                  Spain
                </label>
              </div>

              <div className='flex items-center mb-4'>
                <input
                  id='country-option-4'
                  type='radio'
                  name='countries'
                  value='United Kingdom'
                  className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                  aria-labelledby='country-option-4'
                  aria-describedby='country-option-4'
                />
                <label for='country-option-4' className='text-sm font-medium text-gray-900 ml-2 block'>
                  United Kingdom
                </label>
              </div>

              <div className='flex items-center'>
                <input
                  id='option-disabled'
                  type='radio'
                  name='countries'
                  value='China'
                  className='h-4 w-4 border-gray-200 focus:ring-2 focus:ring-blue-300'
                  aria-labelledby='option-disabled'
                  aria-describedby='option-disabled'
                  disabled=''
                />
                <label for='option-disabled' className='text-sm font-medium text-gray-400 ml-2 block'>
                  China (disabled)
                </label>
              </div>
            </fieldset>
          </div>
          <div className='w-4/6 flex justify-center'>
            <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Brand
                    </th>
                    <td className='py-4 px-40'>Visa</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      County
                    </th>
                    <td className='py-4 px-40'>US</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Exp.Month
                    </th>
                    <td className='py-4 px-40'>December</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Exp.Year
                    </th>
                    <td className='py-4 px-40'>2025</td>
                  </tr>
                  <tr>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Funding
                    </th>
                    <td className='py-4 px-40'>Credit</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Last_4
                    </th>
                    <td className='py-4 px-40'>1904</td>
                  </tr>
                  <tr>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Address_Zip
                    </th>
                    <td className='py-4 px-40'>87233</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='w-full flex justify-end'>
          <div className='w-8/12 flex flex-col justify-center items-center '>
            <div className='w-full flex justify-center gap-80'>
              <h1 className='text-xl font-normal text-zinc-800'>Items Amount</h1>
              <h1 className='text-xl font-normal text-zinc-800'>${totalCost} </h1>
            </div>
            <div className='w-full flex justify-center gap-80'>
              <h1 className='text-xl font-normal text-zinc-800'>Total Amount </h1>
              <h1 className='text-xl font-normal text-zinc-800'> ${totalAmount}</h1>
            </div>
          </div>
        </div>
        <div className='w-full mt-3 flex justify-center items-center'>
          <div className='w-10/12 flex justify-between'>
            <Link to='/shipping'>
              <div className='w-32 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='w-full text-xl text-white hover:text-xs'>back</button>
              </div>
            </Link>
            <div className='w-48 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
              <button className='w-full text-xl text-white hover:text-xs'>PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
