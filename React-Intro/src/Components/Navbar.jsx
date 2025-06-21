import { useEffect, useState } from "react"
function Navbar(props){
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Vignesh")
    function cb(){ 
        console.log("Helo fromm navbar")
    }
    useEffect(cb, []) // Runs only at the first render (or when the component is mounted)
    useEffect(()=>{
        console.log("Broo DOM rendered")
    })  // Runs at every render 
    
    useEffect(cb, [name]) // Runs only when any element's value in dependency array change (and initialized) - You can have multiple elements in the dependency array too and when one of those elements value changes then this effect runs 
    

    return ( 
    
    <div style={{
        display:"flex",
        justifyContent:"space-around",
        padding:"10px"
    }}>
                <div>
                   

                <h1> Reportify {count}</h1>
                </div>
                <div>
                <span>Credits left: {props.credits} for {name}</span>
                <button onClick={()=> setCount(count+1)}>My reports</button>
                <button onClick={()=> setName("Vignesh2")}>Logout</button>
                </div>
            </div>
    )
}

export default Navbar

