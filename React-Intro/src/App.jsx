
import './App.css'
import {useState} from 'react';
import Navbar from './Navbar.jsx'
function App() {
  const [count, setCount] = useState(0)
 
  function updateCount(){
    setCount(count+1)
  }

  function logCount(){
    console.log("Current count is",count)
  }
 return (
     <div> 
        <Navbar/>
        <p>Count is {count} </p>
        <button onClick={updateCount}>Click to increment</button>
        <button onClick={logCount}>Log Count</button>
      </div>    
      )
  
 
}

export default App
