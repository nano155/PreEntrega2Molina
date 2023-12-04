import React from 'react'
import { SanBifeRoutes } from '../sanbife/routes/SanBifeRoutes'
import { Routes, Route } from 'react-router-dom'
import { LoginPage } from '../auth/pages/LoginPage'


export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/*' element={<SanBifeRoutes/>} />
    </Routes>
  )
}
