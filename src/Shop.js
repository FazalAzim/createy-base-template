import React from 'react';
import { Footer } from './Index/Footer';
import { Navbar } from './Index/Navbar';
import { SearchBar } from './Shop/SearchBar';

export const Shop = () => {
  return (
    <>
      <Navbar />
      <SearchBar />
      <Footer />
    </>
  );
};
