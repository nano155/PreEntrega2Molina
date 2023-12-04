import React from 'react'
import { NavBar } from '../../ui/components/NavBar'
import { ItemList } from '../components/ItemList'
import { Footer } from '../../ui/components/Footer'

export const DrinkPage = () => {
  return (
    <div className='background'>
      <NavBar />
      <ItemList
        array={[
          {
            'name': 'beer',
            'category': 'drink',
            
          },
          {
            'name': 'soda',
            'category': 'drink',

          },
          {
            'name': 'coctel',
            'category': 'drink',
            
          }
        ]}
        type={'drink'}
        message={'La sed es opcional, antojate de nuestras bebidas!!'}
      />
      <Footer />
    </div>
  )
}
