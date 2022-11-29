import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon, faTrash } from '../assets/images';
import { PopOfShipping } from './PopOfShipping';
import { getShippingAddress, removeShippingAddress } from '../api/products';

export const ShipAddress = () => {
  const [address, setAddress] = useState([]);

  useEffect(() => {
    getAddress();
  }, []);

  function getAddress() {
    getShippingAddress().then((res) => {
      setAddress(res.data);
      console.log(res.data);
    });
  }
  const handleDeleteAddress = async(id) => {
   await removeShippingAddress(id).then((res)=>console.log(res));
    getAddress();
  };
  const [showMyModel, setShowMyModel] = useState(false);
  const handleOnClose = () => setShowMyModel(false);
  return (
    <section className='w-full'>
      <div className='overflow-x-auto relative shadow-md sm:rounded-lg'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='p-4'>
                <div className='flex items-center'>#</div>
              </th>
              <th scope='col' className='py-3 px-6'>
                Country
              </th>
              <th scope='col' className='py-3 px-6'>
                City
              </th>
              <th scope='col' className='py-3 px-6'>
                State
              </th>
              <th scope='col' className='py-3 px-6'>
                Postal Code
              </th>
              <th scope='col' className='py-3 px-6'>
                Line 1
              </th>
              <th scope='col' className='py-3 px-6'>
                Line 2
              </th>
              <th scope='col' className='py-3 px-6'>
                Note
              </th>
              <th scope='col' className='py-3 px-6'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {address.map((item) => {
              return (
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <td className='p-4 w-4'>
                    <div className='flex items-center text-sm'>{item.id}</div>
                  </td>
                  <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {item.country}
                  </th>
                  <td className='py-4 px-6'>{item.city}</td>
                  <td className='py-4 px-6'>{item.state}</td>
                  <td className='py-4 px-6'>{item.postal_code}</td>
                  <td className='py-4 px-6'>{item.line1}</td>
                  <td className='py-4 px-6'>{item.line2}</td>
                  <td className='py-4 px-6'>{item.note}</td>
                  <td className='flex items-center py-4 px-6 space-x-3'>
                    <FontAwesomeIcon
                      onClick={() => {
                        handleDeleteAddress(item.id);
                      }}
                      icon={faTrash}
                      className='text-xl text-slate-600 hover:text-xl hover:text-orange-500'
                    ></FontAwesomeIcon>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className='w-full mt-3 flex justify-center items-center'>
        <div className='w-72 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
          <button onClick={() => setShowMyModel(true)} className='w-full text-xl text-white hover:text-xs'>
            ADDING ADDRESS +
          </button>
        </div>
      </div>
      <PopOfShipping visible={showMyModel} onClose={handleOnClose} />
    </section>
  );
};
