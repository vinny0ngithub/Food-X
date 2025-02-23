import React from 'react'
import LandingPage from './suby/pages/LandingPage'
import { Routes, Route } from 'react-router-dom'
import TopBar from './suby/components/TopBar'

import './App.css'
import ProductMenu from './suby/components/ProductMenu'
import Login from './suby/pages/Login'
import SignUp from './suby/pages/SignUp'

const App = () => {
  return (
    <div>
      {/* <TopBar/> */}
      <Routes>
          <Route path='/' element = { <LandingPage />} />
          <Route path='/login' element = { <Login />} />
          <Route path='/signup' element = { <SignUp />} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
      </Routes>
    
    </div>
  )
}

export default App