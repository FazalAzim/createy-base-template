import React from 'react';
import { section } from '../assets/images';
import { useState } from 'react';
import { signUp } from '../api/products';

export const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    phone: '',
  });

  const [check, setCheck] = useState(false);

  const submit = async () => {
    if (user.password === user.passwordConfirm && check === true) {
      const { headers } = await signUp(user);
      console.log(headers);
      localStorage.setItem('Headers', JSON.stringify(headers));
    } else {
      console.log('Password does not match');
    }
  };
  return (
    <div
      style={{
        backgroundImage: `url(${section})`,
        backgroundSize: '60%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
      className='bg-gray-300 dark:bg-gray-900'
    >
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Create and account
            </h1>
            <div className='space-y-4 md:space-y-6' action='#'>
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
                <label for='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                  Your name
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  autoComplete='off'
                  value={user.name}
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
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
                  value={user.password}
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
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
                  value={user.passwordConfirm}
                  onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
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
                  value={user.phone}
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
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
                onClick={submit}
                type='submit'
                className='w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Create an account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
