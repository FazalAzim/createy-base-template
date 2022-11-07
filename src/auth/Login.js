import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { faShoppingCart, FontAwesomeIcon, footer } from '../assets/images';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [allEntry, setAllEntry] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    const newEntry = { email: email, password: password };
    setAllEntry([...allEntry, newEntry]);
    console.log(allEntry);
  };

  return (
    <section className='w-full h-screen  bg-gray-300'>
      <div className='container mx-auto py-12 px-12 h-full'>
        <div className='flex justify-center items-center h-full text-gray-800'>
          <div className='w-2/6'>
            <div className=' bg-white shadow-lg rounded-lg'>
              <div className='lg:w-4/4 md:mx-auto'>
                <div className='md:px-8 md:mx-6'>
                  <div className='text-center'>
                    <img className='mx-auto w-28 rounded-full' src={footer} alt='logo' />
                    <h4 className='text-xl font-semibold mt-1 mb-12 pb-1'>
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className='text-4xl pt-2 text-orange-900'
                      ></FontAwesomeIcon>
                      <span className='text-orange-900 '>E-STORE</span>
                    </h4>
                  </div>
                  <form onSubmit={submit}>
                    <p className='mb-4'>Please login to your account</p>
                    <div className='mb-4'>
                      <input
                        type='text'
                        placeholder='UserEmail'
                        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        id='email'
                        value={email}
                        autoComplete='off'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <div className='mb-4'></div>
                      <input
                        type='password'
                        className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                        id='password'
                        placeholder='Password'
                        value={password}
                        autoComplete='off'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className='text-center pt-1 mb-6 pb-1'>
                      <button
                        className='inline-block px-6 py-2.5 text-white bg-blue-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3'
                        type='submit '
                      >
                        Log in
                      </button>
                    </div>
                    <p className='pb-2 flex justify-center items-center text-sm font-light text-gray-500 dark:text-gray-400'>
                      You don,t have account?{' '}
                      <Link
                        to='/register'
                        className='pl-0 font-medium text-primary-800 hover:underline dark:text-primary-500'
                      >
                        Register Now
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
