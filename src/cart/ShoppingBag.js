import React from 'react';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { sneaker } from '../assets/images';
import { fetchCart, setItemsInCart, removeItemFromCart } from '../api/products';

export const ShoppingBag = () => {
  const [product, setProduct] = useState([]);
  const [totalAmount, setTotalAmount] = useState('');
  useEffect(() => {
    getCart();
  }, []);

  function getCart() {
    fetchCart().then((res) => {
      setProduct(res.data.line_items);
      setTotalAmount(res.data.total_items_amount);
    });
  }
  const handleIncreaseCart = (items) => {
    let itemExist = product.find((item) => item.id === items.id);
    if (itemExist) {
      itemExist.quantity += 1;
      setItemsInCart({ id: itemExist.product_id, quantity: itemExist.quantity }).then((res) => console.log(res));
      toast.info(`Increase ${items.product_name} cart quantity`, {
        position: 'top-right',
      });
      getCart();
    }
  };
  const handleDecreaseCart = (items) => {
    let itemExist = product.find((item) => item.id === items.id);
    if (itemExist) {
      if (itemExist.quantity > 1) {
        itemExist.quantity -= 1;
        setItemsInCart({ id: itemExist.product_id, quantity: itemExist.quantity });
        toast.info(`Decrease ${items.product_name} cart quantity`, {
          position: 'top-right',
        });
        getCart();
      } else if (itemExist.quantity === 1) {
        removeItemFromCart(items.id);
        toast.info(`Remove ${items.product_name} cart quantity`, {
          position: 'top-right',
        });
        getCart();
      }
    }
  };

  const handleDeleteFromCart = async (items) => {
    await removeItemFromCart(items.id);
    toast.info(`Remove ${items.product_name} cart quantity`, {
      position: 'top-right',
    });
    getCart();
  };

  return (
    <>
      <div className='w-full flex bg-slate-100 justify-center items-center'>
        <h1 className='text-5xl p-3 font-normal text-emerald-500'>Shopping Cart</h1>
      </div>
      {product.length === 0 ? (
        <div>
          <div className='w-full text-2xl flex justify-center items-center p-8'>Your shopping cart is empty.</div>
          <div className='w-full flex justify-center items-center'>
            <Link to='/shop'>
              <button className='text-2xl font-medium text-blue-500 hover:underline'>Let's Shop</button>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className='w-full'>
            <div className='w-full h-18 flex flex-col justify-center items-center'>
              <div className='w-10/12 mt-4 h-full '>
                <table className='w-full h-full '>
                  <tbody>
                    <tr className='w-full h-18 border-b-2'>
                      <td className='w-2/5 text-2xl'>Product</td>
                      <td className='w-1/5 text-2xl'>Price</td>
                      <td className='w-1/5 text-2xl'>Quantity</td>
                      <td className='w-1/5 text-2xl pl-40'>Total</td>
                    </tr>
                    {product.map((item) => {
                      return (
                        <tr className='h-28 border-b-2'>
                          <td className='w-2/5'>
                            <div className='w-full h-full flex flex-row '>
                              <div className='h-full w-[110px] '>
                                <img
                                  src={item.image ? item.image : sneaker}
                                  alt='logo'
                                  className='w-full h-full rounded-lg'
                                />
                              </div>
                              <div className='flex flex-col '>
                                <div className='text-xl font-normal pl-4 pt-4'>{item.product_name}</div>
                                <div className='w-24 h-8 ml-4 mt-4  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                                  <button
                                    onClick={() => {
                                      handleDeleteFromCart(item);
                                    }}
                                    className='w-full text-sm text-white hover:text-xs'
                                  >
                                    Remove
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className='w-1/5 text-2xl'>${item.price}</td>
                          <td className='w-1/5 text-xl'>
                            <span
                              onClick={() => {
                                handleDecreaseCart(item);
                              }}
                              className='text-2xl text-white bg-indigo-400 mx-2 px-3 rounded-lg hover:cursor-pointer'
                            >
                              -
                            </span>{' '}
                            {item.quantity}{' '}
                            <span
                              onClick={() => {
                                handleIncreaseCart(item);
                              }}
                              className='text-2xl text-white bg-indigo-400 mx-2 px-2 rounded-lg hover:cursor-pointer'
                            >
                              +
                            </span>
                          </td>
                          <td className='w-1/5 text-xl pl-40'>${item.total}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center items-center'>
            <div className='w-10/12 flex flex-row justify-end'>
              <div className='flex flex-col   gap-1  mt-6 '>
                <div className='text-xl font-normal text-zinc-500 '>Total Price : ${totalAmount}</div>
                <div className='text-xl font-normal text-zinc-500 '>Taxes and shipping calculated at checkout</div>
                <Link to='/order'>
                  <div className='w-120 h-10  bg-indigo-400 hover:bg-sky-400 shadow-lg rounded-lg flex justify-center content-center'>
                    <button className='w-full text-xl text-white hover:text-xs'>CheckOut</button>
                  </div>
                </Link>
                <Link to='/shop'>
                  <div className='h-10 text-xl hover:text-xs mt-1 font-normal text-zinc-500 bg-slate-200 shadow-lg rounded-lg flex justify-center items-center'>
                    &#8592; Continue Shopping
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
