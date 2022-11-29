import React, { useState } from 'react';
import { getShippingAddress, setShippingAddress } from '../api/products';

export const PopOfShipping = ({ visible, onClose }) => {
  const [user, setUser] = useState({
    country: '',
    city: '',
    line1: '',
    line2: '',
    state: '',
    postal_code: '',
    note: '',
    first_name: '',
    last_name: '',
    phone_no: '',
    email: '',
  });
  const submit = async () => {
    await setShippingAddress(user).then((res) => console.log(res));
    getShippingAddress();
  };
  const handleOnClose = () => {
    onClose();
  };
  if (!visible) return null;
  return (
    <div className='w-full h-screen flex justify-center items-center  bg-slate-100 bg-opacity-0 backdrop-blur-sm rounded-lg fixed inset-0 '>
      <div className='w-7/12 h-4/6 bg-slate-200 rounded-lg'>
        <div className='w-full flex justify-center gap-3 '>
          <div className='w-5/12  flex flex-col gap-2 '>
            <div>
              <label for='name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                First_Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                autoComplete='off'
                value={user.first_name}
                onChange={(e) => setUser({ ...user, first_name: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='John...'
                required=''
              />
            </div>
            <div>
              <label for='Last_name' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Last_Name
              </label>
              <input
                type='text'
                name='name'
                id='Last_name'
                autoComplete='off'
                value={user.last_name}
                onChange={(e) => setUser({ ...user, last_name: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Doe...'
                required=''
              />
            </div>
            <div>
              <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                autoComplete='off'
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='name@gmail.com'
                required=''
              />
            </div>
            <div>
              <label for='phone' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Phone_No
              </label>
              <input
                type='tel'
                id='phone'
                name='phone'
                value={user.phone_no}
                onChange={(e) => setUser({ ...user, phone_no: e.target.value })}
                placeholder='123-45-678'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label for='address1' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Address 1
              </label>
              <textarea
                id='address1'
                rows='4'
                value={user.line1}
                onChange={(e) => setUser({ ...user, line1: e.target.value })}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your address here...'
              ></textarea>
            </div>
          </div>
          <div className='w-5/12 flex flex-col gap-2'>
            <div>
              <label for='code' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Postal_Code
              </label>
              <input
                type='tel'
                id='code'
                name='postal_code'
                value={user.postal_code}
                onChange={(e) => setUser({ ...user, postal_code: e.target.value })}
                placeholder='12345'
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                required
              />
            </div>
            <div>
              <label for='city' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                City
              </label>
              <input
                type='text'
                name='name'
                id='city'
                autoComplete='off'
                value={user.city}
                onChange={(e) => setUser({ ...user, city: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Tokyo...'
                required=''
              />
            </div>
            <div>
              <label for='country' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Country
              </label>
              <input
                type='text'
                name='name'
                id='country'
                autoComplete='off'
                value={user.country}
                onChange={(e) => setUser({ ...user, country: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Japan...'
                required=''
              />
            </div>
            <div>
              <label for='state' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                State
              </label>
              <input
                type='text'
                name='name'
                id='state'
                autoComplete='off'
                value={user.state}
                onChange={(e) => setUser({ ...user, state: e.target.value })}
                className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='state...'
                required=''
              />
            </div>
            <div>
              <label for='address' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                Address 2
              </label>
              <textarea
                id='address'
                rows='4'
                value={user.line2}
                onChange={(e) => setUser({ ...user, line2: e.target.value })}
                className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Write your address here...'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='w-6/12 h-24 gap-3 flex justify-center items-center'>
          <div className='w-32 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
            <button onClick={submit} className='w-full text-xl text-white hover:text-xs'>
              Save
            </button>
          </div>
          <div className='w-32 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
            <button onClick={handleOnClose} className='w-full text-xl text-white hover:text-xs'>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
