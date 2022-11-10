import React from 'react';
import { ShoppingBag } from '../cart/ShoppingBag';
import { Footer } from '../Index/Footer';
import { Navbar } from '../Index/Navbar';

export const Cart = () => {
  return (
    <>
      <Navbar />
      <ShoppingBag />
      <Footer />
    </>
  );
};
