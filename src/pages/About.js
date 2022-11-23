import React from 'react'
import { Footer } from '../Index/Footer'
import { Navbar } from '../Index/Navbar'
import { MegaMenu } from '../Index/MegaMenu'
import {  sneaker1 } from '../assets/images'

export const About = () => {
  return (
    <>
      <Navbar />
      <MegaMenu title1='OUR STORY' title2='BEST SHOP' sectionPicture={sneaker1}/>
      <Footer />
    </>
  )
}
