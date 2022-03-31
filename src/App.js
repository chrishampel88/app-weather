import React from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Home from './component/Home'
import Me from "./component/Me";
import NavBar from "./component/Navbar";

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
  