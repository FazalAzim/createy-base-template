import React from 'react';
import { ShippingCart } from '../cart/ShippingCart';
import { Footer } from '../Index/Footer';
import { Navbar } from '../Index/Navbar';

export const CartShipping = () => {
  return (
    <>
      <Navbar />
      <ShippingCart />
      <Footer />
    </>
  );
};
