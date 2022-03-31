import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Home from './components/Home'
import Me from "./components/Me";
import NavBar from "./components/Navbar";

export default function App(){
  return(
    <div>
      <NavBar/>        
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Me' element={<Me/>} />          
          <Route path='/Contact' element={<Contact/>} />
      </Routes>    
    </div>
  )
}
  