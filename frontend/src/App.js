import React from 'react'
import HomeHeader from './components/headers/HomeHeader'
import "./App.css"
import SignIn from './components/pages/signIn/SignIn';
import { Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  return (
    <>

      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path='/' element={<HomeHeader />} />
      </Routes>
    </>
  )
}

export default App