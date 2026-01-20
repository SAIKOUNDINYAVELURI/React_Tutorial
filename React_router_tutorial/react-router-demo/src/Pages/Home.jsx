import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function HomePage()
{
    const navigate=useNavigate();
    const[name,setName]=useState();
    function GotoUserPage(){
        navigate(`/user/${name}`)
    }
    return(
        <>
        
        <h1>Welcome, this is Home Page</h1>
        <input type="text" placeholder="Enter any name" onChange={(e)=>{
            setName(e.target.value)

        }} value={name}/>
        <button onClick={GotoUserPage}>Proceed</button>
        </>
    )
}
export default HomePage;