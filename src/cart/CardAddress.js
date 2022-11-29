import React ,{useState} from 'react';
import { FontAwesomeIcon, faTrash } from '../assets/images';
import { PopOfCard } from './PopOfCard';

export const CardAddress = () => {
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
                Brand
              </th>
              <th scope='col' className='py-3 px-6'>
                Exp Month
              </th>
              <th scope='col' className='py-3 px-6'>
                Exp Year
              </th>
              <th scope='col' className='py-3 px-6'>
                Last 4
              </th>
              <th scope='col' className='py-3 px-6'>
                Funding
              </th>
              <th scope='col' className='py-3 px-6'>
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
              <td className='p-4 w-4'>
                <div className='flex items-center text-sm'>1</div>
              </td>
              <th scope='row' className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                Pakistan
              </th>
              <td className='py-4 px-6'>Visa</td>
              <td className='py-4 px-6'>12</td>
              <td className='py-4 px-6'>2025</td>
              <td className='py-4 px-6'>4242</td>
              <td className='py-4 px-6'>Credit</td>
              <td className='flex items-center py-4 px-6 space-x-3'>
                <FontAwesomeIcon
                  // onClick={() => {
                  //   handleDeleteFromCart(item.id);
                  // }}
                  icon={faTrash}
                  className='text-xl text-slate-600 hover:text-xl hover:text-orange-500'
                ></FontAwesomeIcon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='w-full mt-3 flex justify-center items-center'>
        <div className='w-72 h-12  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
          <button onClick={() => setShowMyModel(true)} className='w-full text-xl text-white hover:text-xs'>CARD ADDRESS +</button>
        </div>
      </div>
      <PopOfCard visible={showMyModel} onClose={handleOnClose}/>
    </section>
  );
};
