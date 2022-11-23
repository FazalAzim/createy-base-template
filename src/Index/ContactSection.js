import React from 'react';
import { section, faEarth, FontAwesomeIcon, faLocation, faPhone, faHandHoldingDollar } from '../assets/images';
export const ContactSection = () => {
  return (
    <div className='container my-24 px-6 mx-auto'>
      <section className='mb-32 text-gray-800'>
        <div
          className='relative overflow-hidden bg-no-repeat bg-cover rounded-lg'
          style={{
            backgroundSize: '28%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            'background-image': `url(${section})`,
            height: '300px',
          }}
        ></div>
        <div className='container text-gray-800 px-4 md:px-12'>
          <div
            className='block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6'
            style={{ 'margin-top': '-100px', background: 'hsla(0, 0%, 100%, 0.8)', 'backdrop-filter': ' blur(30px)' }}
          >
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 mb-12'>
              <div className='mb-12 lg:mb-0 text-center mx-auto'>
                <FontAwesomeIcon icon={faEarth} className='text-4xl pb-5  text-blue-600'></FontAwesomeIcon>

                <h6 className='font-medium'>Pakistan</h6>
              </div>
              <div className='mb-12 lg:mb-0 text-center mx-auto'>
                <FontAwesomeIcon icon={faLocation} className='text-4xl pb-5  text-blue-600'></FontAwesomeIcon>

                <h6 className='font-medium'>Swat, 19040</h6>
              </div>
              <div className='mb-6 md:mb-0 text-center mx-auto'>
                <FontAwesomeIcon icon={faPhone} className='text-4xl pb-5  text-blue-600'></FontAwesomeIcon>

                <h6 className='font-medium'>+ 01 234 567 89</h6>
              </div>
              <div className='text-center mx-auto'>
                <FontAwesomeIcon icon={faHandHoldingDollar} className='text-4xl pb-5  text-blue-600'></FontAwesomeIcon>

                <h6 className='font-medium'>Tax ID: 273 384</h6>
              </div>
            </div>
            <div className='max-w-[700px] mx-auto'>
              <form>
                <div className='form-group mb-6'>
                  <input
                    type='text'
                    className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput7'
                    placeholder='Name'
                  />
                </div>
                <div className='form-group mb-6'>
                  <input
                    type='email'
                    className='form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    id='exampleInput8'
                    placeholder='Email address'
                  />
                </div>
                <div className='form-group mb-6'>
                  <textarea
                    className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            '
                    id='exampleFormControlTextarea13'
                    rows='3'
                    placeholder='Message'
                  ></textarea>
                </div>
                <div className='form-group form-check text-center mb-6'>
                  <input
                    type='checkbox'
                    className='form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-400 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer'
                    id='exampleCheck87'
                    checked
                  />
                  <label className='form-check-label inline-block text-gray-800' for='exampleCheck87'>
                    Send me a copy of this message
                  </label>
                </div>
                <button
                  type='submit'
                  className='
            w-full
            px-6
            py-2.5
            bg-blue-600
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:bg-blue-700 hover:shadow-lg
            focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-blue-800 active:shadow-lg
            transition
            duration-150
            ease-in-out'
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
