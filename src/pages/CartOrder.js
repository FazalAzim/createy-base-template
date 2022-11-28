import React from 'react';
import { OrderCart } from '../cart/OrderCart';
import { Footer } from '../Index/Footer';
import { Navbar } from '../Index/Navbar';

export const CartOrder = () => {
  return (
    <>
      <Navbar />
      <OrderCart />
      <Footer />
    </>
  );
};
