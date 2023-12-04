import React from 'react'
import ReactDOM from 'react-dom/client'

import './css/styles.css'
import { SanBifeApp } from './SanBifeApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SanBifeApp />
    </BrowserRouter>
  </React.StrictMode>
)
