import React, { useState } from 'react';

let x = new Date().toLocaleTimeString();
        


const Clock=()=>{

const State=useState;
const[old,now]=useState(x);


    const Update=()=>{
        
            x= new Date().toLocaleTimeString()
            now(x);
    }
  setInterval(Update,1000);
    
    return(
       <>
       <h1 style={{color:'white',marginBottom:'20px'}}> 😄 Time never waits for anyone 😄</h1>
       <div className="hookbox">
       
            <h1 className="hooktext">{old}</h1>
            
        </div>
       </>
    );
    

}

export default Clock;