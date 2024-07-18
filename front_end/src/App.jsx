import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
  
   
    <Router>
    <Home/>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Signup" element={<Signup />}></Route>
   </Routes>
   </Router>
  
  )
}

export default App
