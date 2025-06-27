import { useEffect } from "react"
import { useParams } from "react-router"
function Dynamic(){
    const params = useParams()
    console.log("Params", params)

    useEffect(()=>{
        // fetch the data for params.name from backend

    }, [])
    return(
        <div>
            <Navbar/>
            Hello {params.name}
            <Navbar/>
        </div>
    )
}
export default Dynamic