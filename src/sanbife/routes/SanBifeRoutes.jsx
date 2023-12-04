import React from 'react'
import { Homepage } from '../pages/Homepage'
import { Routes, Route } from 'react-router-dom'
import { FoodPage } from '../pages/FoodPage'
import { ReservePage } from '../pages/ReservePage'
import { DrinkPage } from '../pages/DrinkPage'
import { ItemDetail } from '../pages/ItemDetail'
import { FoodCategory } from '../pages/FoodCategory'
import { DrinkCategory } from '../pages/DrinkCategory'


export const SanBifeRoutes = () => {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path='food' element={<FoodPage />} />
        <Route path='food/category/:id' element={<FoodCategory />}/>
        <Route path='drink' element={<DrinkPage/>} />
        <Route path='drink/category/:id' element={<DrinkCategory/>} />
        <Route path='item/:id' element={<ItemDetail />}/>
        <Route path='reserve' element={<ReservePage/>}/>
    </Routes>
    </>

  )
}
