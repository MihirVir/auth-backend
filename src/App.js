import React from 'react'
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<HomePage />}></Route>
        <Route exact path = "/login" element = {<LoginPage />} ></Route>
        <Route exact path = "/register" element = {<RegisterPage />}></Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App
