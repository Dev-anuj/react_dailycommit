import React, { useState } from 'react';

const x=()=>{
    return (
        new Date().toLocaleTimeString()
        );
}

const Hooktimechallenge=()=>{

const State=useState;
const[old,now]=useState(x());


    const changeoftime=()=>{
        return(
            now(new Date().toLocaleTimeString())
            
        );
    }
  
    
    return(
       <>
       <h1 style={{color:'white',marginBottom:'20px'}}> 😄 On click the time gets updated 😄</h1>
       <div className="hookbox">
       
            <h1 className="hooktext">{old}</h1>
            <button className="hookbutton" onClick={changeoftime}>Click me</button>
        </div>
       </>
    );
    

}

export default Hooktimechallenge;