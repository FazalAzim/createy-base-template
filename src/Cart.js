import React from 'react'
import { ShoppingCart } from './Cart/ShoppingCart'
import { Footer } from './Index/Footer'
import { Navbar } from './Index/Navbar'

export const Cart = () => {
  return (
    <>
    <Navbar />
    <ShoppingCart />
    <Footer />
    </>
  )
}
