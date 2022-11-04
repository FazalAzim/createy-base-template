import React from 'react'
import { Footer } from '../Index/Footer'
import { Navbar } from '../Index/Navbar'
import { MegaMenu } from '../Index/MegaMenu'
import { section } from '../assets/images'

export const Home = () => {
  return (
    <>
      <Navbar />
      <MegaMenu title1='BEST ONLINE STORE' title2='ADD TO CART' sectionPicture={section}/>
      <Footer />
    </>
  )
}
