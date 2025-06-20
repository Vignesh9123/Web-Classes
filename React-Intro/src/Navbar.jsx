function Navbar(){
    return ( <div style={{
        display:"flex",
        justifyContent:"space-around",
        padding:"10px"
    }}>
                <div>

                <h1> Reportify</h1>
                </div>
                <div>

                <button>My reports</button>
                <button>Logout</button>
                </div>
            </div>
    )
}

export default Navbar