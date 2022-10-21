import React from 'react'
import { Footer } from './Index/Footer'
import { Navbar } from './Index/Navbar'
import { GridCard } from './Shop/GridCard'
import { ListCard } from './Shop/ListCard'
import { SearchBar } from './Shop/SearchBar'

export const Shop = () => {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <GridCard />
      <ListCard />
      <Footer />
    </div>
  )
}
