import React from 'react';
import { useState } from 'react';
import { registration } from '../api/products';

export const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [phone, setPhone] = useState();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm && check === true) {
      const { config } = await registration({ email, name, password, passwordConfirm, phone });
      setData(config.headers);
      console.log(config);
    } else {
      console.log('Password does not match');
    }
  };
  return (
    <div className='bg-gray-50 dark:bg-gray-900'>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create and account
            </h1>
            <form onSubmit={submit} className='space-y-4 md:space-y-6' action='#'>
              <div>
                <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='off'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@gmail.com'
                  required=''
                />
              </div>
              <div>
                <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='off'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='John...'
                  required=''
                />
              </div>
              <div>
                <label for='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete='off'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>
              <div>
                <label for='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Confirm password
                </label>
                <input
                  type='confirm-password'
                  name='confirm-password'
                  id='confirm-password'
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  autoComplete='off'
                  placeholder='••••••••'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required=''
                />
              </div>
              <div>
                <label for='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Phone_No
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='123-45-678'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>
              <div className='flex items-start'>
                <div className='flex items-center h-5'>
                  <input
                    id='terms'
                    type='checkbox'
                    value={check}
                    onChange={(e) => setCheck(!check)}
                    className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
                    required=''
                  />
                </div>
                <div className='ml-3 text-sm'>
                  <label for='terms' className='font-light text-gray-500 dark:text-gray-300'>
                    I accept the{' '}
                    <a className='font-medium text-primary-600 hover:underline dark:text-primary-500' href='//'>
                      Terms and Conditions
                    </a>
                  </label>
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
