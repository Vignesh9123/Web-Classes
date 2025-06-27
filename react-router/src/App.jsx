import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Index from './Index.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Dynamic from './Dynamic.jsx';
import Navbar from './Navbar.jsx';

function App() {
  return (
   <BrowserRouter>
        <Navbar/>

      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/u/:name" element={<Dynamic/>}/>
        <Route path="*" element={<>Not found please enter correct URL idiot</>} />

      </Routes>
      <h1>Footer</h1>
   </BrowserRouter>
  )
}

export default App
