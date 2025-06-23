import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Index from './Index.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        
      </Routes>
   </BrowserRouter>
  )
}

export default App
