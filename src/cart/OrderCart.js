import React from 'react';
import { sneaker } from '../assets/images';
import { faCircle, FontAwesomeIcon, faTrash } from '../assets/images';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchCart, removeItemFromCart } from '../api/products';

export const OrderCart = () => {
  const [product, setProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState('');
  const [totalCost, setTotalCost] = useState('');
  useEffect(() => {
    getCart();
  }, []);
  function getCart() {
    fetchCart().then((res) => {
      setProduct(res.data.line_items);
      setTotalAmount(res.data.total_amount);
      setTotalCost(res.data.total_items_amount);
    });
  }
  const handleDeleteFromCart = (id) => {
    removeItemFromCart(id);
    getCart();
  };

  return (
    <section className='w-full  flex flex-col mt-4 justify-center items-center'>
      <div className='w-10/12 flex flex-col justify-center items-center '>
        <div className='w-8/12 h-20 flex flex-col bg-slate-50 rounded-lg'>
          <div className='w-full flex justify-center items-center bg-slate-50'>
            <span className='flex h-7 w-7'>
              <span className='animate-ping absolute inline-flex h-7 w-7 rounded-full bg-yellow-400 opacity-100'></span>
              <span className='relative inline-flex rounded-full h-7 w-7 bg-yellow-500'></span>
            </span>
            <span>
              <div className='px-3'>
                <hr className='w-80  border-[1px] border-slate-900'></hr>
              </div>
            </span>
            <FontAwesomeIcon icon={faCircle} className='text-3xl text-red-600'></FontAwesomeIcon>
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
        <div className='w-10/12'>
          <table className='w-full h-full border-t-2 mt-4 '>
            {product.map((item) => {
              return (
                <tr className=' border-b-2 '>
                  <td className='w-2/5'>
                    <div className='w-full h-full flex flex-row '>
                      <div className='pl-4 h-full w-[80px] '>
                        <img src={item.image ? item.image : sneaker} alt='logo' className='w-full h-full rounded-lg' />
                      </div>
                      <div className='flex flex-col '>
                        <div className='text-xl font-normal pl-4 pt-4'>{item.product_name}</div>
                      </div>
                    </div>
                  </td>
                  <td className='w-1/5 text-xl'>Quantity:{item.quantity}</td>
                  <td className='w-1/5 text-xl'>Item price: ${item.price}</td>
                  <td className='w-1/5 text-xl pl-40'>
                    <FontAwesomeIcon
                      onClick={() => {
                        handleDeleteFromCart(item.id);
                      }}
                      icon={faTrash}
                      className='text-2xl text-slate-600 hover:text-xl hover:text-orange-500'
                    ></FontAwesomeIcon>
                  </td>
                </tr>
              );
            })}
          </table>
          <div className='border-y-2 border-fuchsia-900 mt-2'>
            <div className='text-xl font-normal text-zinc-500 flex flex-col justify-center items-center '>
              <div className='w-full flex justify-center gap-80'>
                <h1 className='text-xl font-normal text-zinc-800'>Shipping Amount</h1>
                <h1>${totalAmount - totalCost} </h1>
              </div>
              <hr className='w-[620px] border-[1px] border-slate-900'></hr>
              <div className='w-full flex justify-center gap-80'>
                <h1 className='text-xl font-normal text-zinc-800'>Total Price </h1>
                <h1> ${totalAmount}</h1>
              </div>
            </div>
          </div>
          <div className='mt-4 w-full flex justify-between '>
            <Link to='/shop'>
              <div className='h-10 w-80 text-xl hover:text-xs mt-1 font-normal shadow-lg text-zinc-500 bg-slate-200 rounded-lg flex justify-center items-center'>
                &#8592; Continue Shopping
              </div>
            </Link>
            <Link to='/shipping'>
              <div className='w-40 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                <button className='w-full text-xl text-white hover:text-xs'>Next Step</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
