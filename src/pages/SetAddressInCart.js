import React, { useState } from 'react';
import { CardAddress } from '../cart/CardAddress';
import { ShipAddress } from '../cart/ShipAddress';
import { Footer } from '../Index/Footer';
import { Navbar } from '../Index/Navbar';

export const SetAddressInCart = () => {
  const [showAddress, setShowAddress] = useState(false);
  const handleShow = (value) => {
    setShowAddress(value);
  };
  return (
    <>
      <Navbar />
      <section className='w-full'>
        <div className='w-full h-16 flex  bg-slate-100'>
          <div
            onClick={() => handleShow(false)}
            className='w-3/6 h-full bg-slate-200 shadow-lg flex justify-center items-center hover:bg-slate-100 hover:border-b-2 hover:border-slate-600 text-xl'
          >
            CARD INFORMATION
          </div>
          <div
            onClick={() => handleShow(true)}
            className='w-3/6 h-full bg-slate-200  shadow-lg flex justify-center items-center hover:bg-slate-100 hover:border-b-2 hover:border-slate-600 text-xl'
          >
            SHIPPING ADDRESS
          </div>
        </div>
        {showAddress ? <ShipAddress /> : <CardAddress />}
      </section>
      <Footer />
    </>
  );
};
