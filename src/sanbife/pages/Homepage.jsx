import React from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { CarouselHome } from '../components/CarouselHome'
import { Footer } from '../../ui/components/Footer'

export const Homepage = () => {
  return (
    <>
      <header className='header-home'>
        <NavBar />
        <CarouselHome />
      </header>
      <Footer />
    </>
  )
}
