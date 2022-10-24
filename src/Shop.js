import React from 'react';
import { Footer } from './Index/Footer';
import { Navbar } from './Index/Navbar';
import { SearchBar } from './Shop/SearchBar';

export const Shop = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Footer />
    </div>
  );
};
