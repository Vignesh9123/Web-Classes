import React from 'react'
import { Link } from "react-router";
import { useNavigate } from "react-router";
import Navbar from './Navbar';

function Index() {
    const navigate = useNavigate()
  return (
    <div>
      Index page starting
      <button onClick={()=>{
        navigate("/about")
        
        
      }}>Login</button>
      <Link to="/about">About</Link>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Index
