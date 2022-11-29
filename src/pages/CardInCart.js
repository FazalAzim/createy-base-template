import React from 'react';
import { CardCart } from '../cart/CardCart';
import { Footer } from '../Index/Footer';
import { Navbar } from '../Index/Navbar';

export const CardInCart = () => {
  return (
    <>
      <Navbar />
      <CardCart />
      <Footer />
    </>
  );
};
