import { Switch } from '@headlessui/react';
import React from 'react'
import {
  Route,
  Routes,
} from "react-router-dom";
import "./App.css"
import SignIn from './components/pages/admin/SignIn'
import Home from "./components/pages/home/Home"
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/signin" element={<SignIn/>}/>
    </Routes>
  )
}

export default App