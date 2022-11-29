import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faCircle, FontAwesomeIcon, faCheck } from '../assets/images';
import { getShippingAddress } from '../api/products';

export const ShippingCart = () => {
  const [address, setAddress] = useState([]);
  const [table, setTable] = useState({});

  useEffect(() => {
    getShippingAddress().then((res) => {
      setAddress(res.data);
      console.log(res.data);
    });
  }, []);
  const handleSetDataInTable = (item) => {
    setTable(item);
  };
  console.log(table);
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
          <span className='flex h-7 w-7'>
            <span className='animate-ping absolute inline-flex h-7 w-7 rounded-full bg-yellow-400 opacity-100'></span>
            <span className='relative inline-flex rounded-full h-7 w-7 bg-yellow-500'></span>
          </span>
          <span>
            <div className='px-3'>
              <hr className='w-80 border-[1px] border-slate-900'></hr>
            </div>
          </span>
          <FontAwesomeIcon icon={faCircle} className='text-3xl text-red-600'></FontAwesomeIcon>
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
          <h1 className='text-xl text-cyan-700'>Shipping Address</h1>
        </div>
        <div className='w-full flex  mt-4'>
          <div className='w-2/6 flex flex-row justify-center items-center'>
            <fieldset className='mb-5'>
              {address.map((item) => {
                return (
                  <div className='flex items-center mb-4'>
                    <input
                      id='country-option-1'
                      type='radio'
                      name='countries'
                      value='USA'
                      onClick={() => {
                        handleSetDataInTable(item);
                      }}
                      className='h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300'
                      // checked=''
                    />
                    <label for='country-option-1' className='text-sm font-medium text-gray-900 ml-2 block'>
                      {item.city}
                    </label>
                  </div>
                );
              })}
            </fieldset>
          </div>
          <div className='w-4/6 flex justify-center'>
            <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
              <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                <tbody>
                  <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      First_Name
                    </th>
                    <td className='py-4 px-40'>{table.first_name}</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Last_Name
                    </th>
                    <td className='py-4 px-40'>{table.last_name}</td>
                  </tr>
                  <tr className='bg-white border-b dark:bg-gray-900 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Email_Address
                    </th>
                    <td className='py-4 px-40'>{table.email}</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      City
                    </th>
                    <td className='py-4 px-40'>{table.city}</td>
                  </tr>
                  <tr>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Country
                    </th>
                    <td className='py-4 px-40'>{table.country}</td>
                  </tr>
                  <tr className='bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700'>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Postal_Code
                    </th>
                    <td className='py-4 px-40'>{table.postal_code}</td>
                  </tr>
                  <tr>
                    <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      Phone_no
                    </th>
                    <td className='py-4 px-40'>{table.phone_no}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='w-full mt-3 flex justify-center items-center'>
          <div className='w-10/12 flex justify-between'>
            <Link to='/order'>
              <div className='w-32 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='w-full text-xl text-white hover:text-xs'>back</button>
              </div>
            </Link>
            <Link to='/card'>
              <div className='w-32 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='w-full text-xl text-white hover:text-xs'>Next</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
